function Local(){}

Local.prototype.init = function() {
	if(localStorage.getItem("nameUser") != undefined){
		console.log(localStorage.getItem("nameUser"));
		Login.prototype.sendSubmit(localStorage.getItem("nameUser"));
	}
};