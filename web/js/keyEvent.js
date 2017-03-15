var KeyEvent = function(){};

KeyEvent.prototype.init = function(){
	document.onkeydown = this.keyCheck;
};

var target = function(){
	return document.activeElement;
};

KeyEvent.prototype.keyCheck = function(e){
	var that = this;
	var focus = target();
	e = e || window.event;
	switch(e.keyCode){
		case 13:
			if(focus.name == "chat_input"){
				if(USER.name == "") showError("You must login first.");
				else APP.chat.send(focus.value);
			}
			break;
		case 27:
			document.querySelector('.closeError').click();
			document.querySelector('.closeGuia').click();
	}
};



