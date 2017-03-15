var Chat = function(){}

Chat.prototype.init = function(){
	this.opacity();
}

Chat.prototype.send = function(msg){
	var msgs = document.querySelector(".messages");
	var input = document.querySelector("[name = 'chat_input']");
	input.value = "";
	if (msg.replace(/\s/g, "").length > 0){
		var msgHtml = new Message();
		msgHtml.setText(msg);
		msgs.appendChild(msgHtml.getHTML());
		msgs.scrollTop = msgs.scrollHeight;
		var msgto = {
			type: "message",
			user: USER.name, 
			msg: msg
		}
		ws.send(JSON.stringify(msgto));
	}
}

Chat.prototype.recive = function(name, msg){
	var msgs = document.querySelector(".messages");
	var msgHtml = new Message();
	msgHtml.setText(msg, name);
	msgs.appendChild(msgHtml.getHTML());
	msgs.scrollTop = msgs.scrollHeight;
}

Chat.prototype.opacity = function(){
	var isFocus = false;
	var opacityOut = "0.2";
	var chat = document.querySelector(".chat");
	var input = document.querySelector("[name = 'chat_input']");
	
	input.onblur = function(){
		isFocus = false;
		chat.style.opacity = opacityOut;
	}

	chat.onmouseover = function(){
		chat.style.opacity = "1";
	}

	chat.onmouseleave = function(){
		if(!isFocus) chat.style.opacity = opacityOut;
	}

	input.onfocus = function(){
		isFocus = true;
		chat.style.opacity = "1";
	}
}
