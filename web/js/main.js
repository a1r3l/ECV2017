var USER = {
	name: ""
}

var APP = {
	chat: null,
	menu: null,
	online: null,
	login: null,
	keyevent: null,
	register: null,
	edition: null,
	init: function(){
		APP.menu = new Menu();
		APP.online = new OnlineUsers();
		APP.login = new Login();
		APP.keyevent = new KeyEvent();
		APP.chat = new Chat();
		APP.register = new Register();
		APP.edition = new Edition();
	    APP.menu.init();
		APP.login.init();
		APP.register.init();
		APP.keyevent.init();
		APP.chat.init();
		APP.edition.init();
	}
}

var CANVAS = {
	canvas: null,
	init: function(){
		CANVAS.canvas = new Canvas();
		CANVAS.canvas.init();	
	}
}

var SERVERSIDE = {
	init: function(){
		
	}
}

var DATABASE = {
	data: null,
	onlineUsers: new Set(),
	init: function(){
		DATABASE.data = new DB();
		DATABASE.data.init();
	}
}

var LOCAL = {
	init: function(){
		var local = new Local();
		local.init();
	}
}

DATABASE.init();
APP.init();
CANVAS.init();

