var Login = function(){}

Login.prototype.init = function(){
	this.show_hide();
	this.submit();
	this.onLogout();
};

Login.prototype.removeInputs = function(){
	var user = document.querySelector("[name='login_user']");
	var pass = document.querySelector("[name='login_pass']");
	var save = document.querySelector("[name='save']");
	pass.style.border = "0px";
	user.style.border = "0px";
	user.value = "";
	pass.value = "";
	save.checked = false;
};

Login.prototype.show_hide = function(){
	var that = this;
	var login = document.querySelector(".login");
	var sub_button = document.querySelector(".button_login");
	var register = document.querySelector(".register");
	document.querySelector(".loginButton").onclick = function(){
		if(login.style.display == "none" || login.style.display == ""){
			login.style.display = "block";
			sub_button.style.display = "block";
			register.style.display = "none";
			load.style.display = "none";
		}
		else {
			login.style.display = "none";
			load.style.display = "none";
			that.removeInputs();
		}
	}
};

Login.prototype.submit = function(){
	var that = this;
	var user = document.querySelector("[name='login_user']");
	var pass = document.querySelector("[name='login_pass']");
	var save = document.querySelector("[name='save']");
	var load = document.querySelector('.submit_loader');
	var sub_button = document.querySelector(".button_login");
	sub_button.onclick = function(){
		that.markNonInput(user, pass);
		if(user.value != "" && pass.value != ""){
			sub_button.style.display = "none";
			load.style.display = "block";
			if(save.checked){
				localStorage.setItem("nameUser", user.value);
			}
			DATABASE.data.loginUser(user.value, pass.value);
		}
	}
};

Login.prototype.markNonInput = function(user,pass){
	if(user.value == ""){
		user.style.border = "2px solid red";	
	}
	if(pass.value == ""){
		pass.style.border = "2px solid red";
	}
	if(pass.value != ""){
		pass.style.border = "0px";
	}
	if(user.value != ""){
		user.style.border = "0px";
	}
};

Login.prototype.sendSubmit = function(user){
	var that = this;
	USER.name = user;
	var user = {
		type: "new",
		user: user
	}
	ws.send(JSON.stringify(user));
	that.success();
	that.removeInputs();
};


Login.prototype.success = function(){
	document.querySelector(".loginButton").style.display = "none";
	document.querySelector('.registerButton').style.display = "none";
	document.querySelector(".logoutButton").style.display = "block";
	document.querySelector(".nickname").firstChild.innerText = USER.name;
	document.querySelector(".nickname").style.display = "block";
}

Login.prototype.onLogout = function(){
	that = this;
	document.querySelector('.logoutButton').onclick = function(){
		that.logout();
	}
}

Login.prototype.logout = function(){
	var msg = {
		type: "leave",
		user: USER.name
	}
	localStorage.removeItem("nameUser");
	ws.send(JSON.stringify(msg));
	USER.name = "";
	document.querySelector(".loginButton").style.display = "block";
	document.querySelector('.registerButton').style.display = "block";
	document.querySelector(".logoutButton").style.display = "none";
	document.querySelector(".nickname").style.display = "none";
}

