var ws = new WebSocket("ws://84.89.136.194:9003");

ws.onerror=function(event){
    document.querySelector('.errors').style.display = "flex";
}
ws.onopen = function() {
	console.log("Connected to the Server");
	LOCAL.init();
};
ws.onmessage = function (message) {
	mes = JSON.parse(message.data);
	if(mes.type == "message" && mes.user != USER.name){
		APP.chat.recive(mes.user,mes.msg);
	}
	else if(mes.type == "new"){
		console.log("NEW USER: " + mes.user);
		APP.menu.showNewUser(mes.user);
	}
	else if(mes.type == "leave"){
		console.log("USER LEAVE: " + mes.user);
		APP.menu.deleteUser(mes.user);
	}
	else if(mes.type == "users"){
		APP.menu.getUsers(mes.users);
	}
	else if(mes.type == "onPaint"){
		CANVAS.canvas.drawOnMessage(mes.canvasName,mes.position,mes.color,mes.size);
	}
	else if(mes.type == "canvasState"){
		CANVAS.canvas.setUpdatedState(mes);
	}
	else if(mes.type == "needSave"){
		CANVAS.canvas.sendCanvasState();
	}
	else{
		console.log(mes);
	}
};
ws.onclose = function() { };