const WebSocket = require('ws');


// SERVER CHAT

PORT = 9003;

users = [];

online = [];

state = null;

const wss = new WebSocket.Server({ 
	perMessageDeflate: false,
	port: PORT
});

wss.reqState = function reqState(){
	if(online.length > 0) online[0].send(JSON.stringify({type:"needSave"}));
}

wss.broadcast = function broadcast(data) {
	wss.clients.forEach(function each(client) {
		if (client.readyState === WebSocket.OPEN) {
			client.send(data);
		}
	});
};
wss.getState = function getState(ws){
	if(state) ws.send(JSON.stringify(state));
}

wss.newUser = function newUser(name, ws){
	console.log(name + " login to the Server.")
	users.push([name, ws]);
	wss.broadcast(JSON.stringify({type: "new" , "user" : name}));
}

wss.disconect = function leaveUser(name, ws){
	console.log(name + " logout to the Server.");
	var index = users.indexOf([name, ws]);
	users.splice(index, 1);
	wss.broadcast(JSON.stringify({type: "leave" , "user" : name}));
}

wss.closeUser = function closeUser(ws){
	for(var i = 0; i < users.length; ++i){
		name = users[i][0];
		if(users[i][1] == ws){
			console.log(name + " leave to the Server.");
			users.splice(i, 1);
			wss.broadcast(JSON.stringify({type: "leave" , "user" : name}));
			break;
		}
	}
}

wss.newOnline = function newOnline(ws){
	online.push(ws);
	console.log("There are " + online.length + " viewers.");
}

wss.leaveOnline = function leaveOnline(ws){
	for(var i = 0; i < online.length; ++i){
		if(online[i] == ws){
			online.splice(i, 1);
			break;
		}
	}
	console.log("There are " + online.length + " viewers.");
}

wss.getUsers = function getUsers(ws){
	names = []
	for(var i = 0; i < users.length; ++i){
		names.push(users[i][0]);
	}
	ws.send(JSON.stringify({ type: "users", users: names }))
}

wss.on('connection', function connection(ws) {
	wss.newOnline(ws);
	wss.getUsers(ws);
	wss.getState(ws);
	ws.on('message', function incoming(data) {
		d = JSON.parse(data);
		if(d.type == "new"){
			wss.newUser(d.user , ws);
		}
		else if(d.type == "leave"){
			wss.disconect(d.user, ws);
		}
		else if(d.type == "canvasState"){
			state = d;
		}
		else{
			wss.broadcast(data);	
		}
	});
	ws.on('close', function close(){
		wss.closeUser(ws);
		wss.leaveOnline(ws);
	});
});


console.log("Running in Port " + PORT);
setInterval(wss.reqState, 1000);