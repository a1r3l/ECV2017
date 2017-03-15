var OnlineUsers = function(){

}

OnlineUsers.prototype.actualize = function(user){
	var users = document.querySelector(".users");
	var li = document.createElement("li");
	li.className = "user";
	li.id = user;
	li.innerHTML = user;
	users.appendChild(li);
};

OnlineUsers.prototype.removeUser = function(user){
	var user = document.querySelector("#"+user);
	user.remove();
}