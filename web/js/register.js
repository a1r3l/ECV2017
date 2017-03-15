var Register = function(){};

Register.prototype.init = function() {
	this.show_hide();
	this.submit();
};


Register.prototype.show_hide = function(){
	var that = this;
	var register = document.querySelector(".register");
	var login = document.querySelector(".login");
	document.querySelector(".registerButton").onclick = function(){
		if(register.style.display == "none" || register.style.display == ""){
			register.style.display = "block";
			login.style.display = "none";
		}
		else {
			register.style.display = "none";
			that.removeInputs();
		}
	}
};

Register.prototype.removeInputs = function(){
	var user = document.querySelector("[name='reg_user']");
	var pass = document.querySelector("[name='reg_pass']");
	var rpass = document.querySelector("[name='rreg_pass']");
	user.value = "";
	pass.value = "";
	rpass.value = "";
};

Register.prototype.submit = function(){
	var that = this;
	var user = document.querySelector("[name='reg_user']");
	var pass = document.querySelector("[name='reg_pass']");
	var rpass = document.querySelector("[name='rreg_pass']");
	var sub_button = document.querySelector(".button_register");
	var register = document.querySelector(".register");
	sub_button.onclick = function(){
		that.markNonInput(user, pass,rpass);
		if(user.value != "" && pass.value != "" && rpass.value != ""){
			if(pass.value != rpass.value) showError("Passwords do not match.");
			else{
				DATABASE.data.writeUserData(user.value, pass.value);
				register.style.display = "none";
				that.removeInputs();
			}
		}
			
	}
};


Register.prototype.markNonInput = function(user,pass,rpass){

	if(user.value == ""){
		user.style.border = "2px solid red";	
	}
	if(pass.value == ""){
		pass.style.border = "2px solid red";
	}
	if(rpass.value == ""){
		rpass.style.border = "2px solid red";
	}
	if(pass.value != ""){
		pass.style.border = "0px";
	}
	if(rpass.value != ""){
		rpass.style.border = "0px";
	}
	if(user.value != ""){
		user.style.border = "0px";
	}
};
