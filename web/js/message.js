var Message = function(){
	this.text = "";
	this.name = "";
	this.type = "";
};

Message.prototype.setText = function(text,name) {
	this.text = text;
	if(name == undefined) {
		this.name = USER.name;
		this.type = "me";
	}
	else {
		this.name = name;
		this.type = "out"
	}
};

Message.prototype.getHTML = function(){
	var firstLetter = this.name[0].toUpperCase();
	var that = this;
	that.getDate();
	var div = document.createElement('div');
	div.className = 'msg';
	if(this.type == "out") div.className = 'msg align_right'; 
	div.innerHTML = "<div class='logo " + this.type + "'>"+ firstLetter +
	"</div><p><span class='time "+ this.type +"'><span class='material-icons icon_time'>access_time </span>"+ that.getDate() +
	"</span><b>" + this.name + "</b></p>" + this.text;

	return div;
};


Message.prototype.getDate = function(){
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	if(hours < 10) hours = "0" + hours;
	if(minutes < 10) minutes = "0" + minutes;
	return hours + ":" + minutes + " ";
};