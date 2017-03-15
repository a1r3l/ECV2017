function Menu(){}

Menu.prototype.init = function(){
	this.toogle();
	this.show_hide_items();
}

Menu.prototype.toogle = function(){
	document.querySelector(".menuButon").onclick = function(){
		var menu = document.querySelector(".menu");
		if(menu.style.display == "none" || menu.style.display == ""){
			menu.style.display = "block";
		}
		else menu.style.display = "none";
	};
}

Menu.prototype.show_hide_items = function(){
	var tabs = document.querySelectorAll(".menuTab");
	tabs.forEach(function(tab) {
		tab.onclick = function(){
			var status = this.children[1];
			var item = document.querySelector("." + this.getAttribute("name") );
			if(status.innerText == "visibility"){
				status.innerText = "visibility_off";
				item.style.display = "none";
			}
			else{
				status.innerText = "visibility";
				item.style.display = "block";
			}
		}
	});
}

Menu.prototype.getUsers = function(users){
	users.forEach(Menu.prototype.showNewUser);
}

Menu.prototype.showNewUser = function(user){
	userscont = document.querySelector('.users');
	li = document.createElement("li");
	li.className = "user";
	li.id = user;
	li.innerHTML = user;
	userscont.appendChild(li);	
}

Menu.prototype.deleteUser = function(user){
	item = document.querySelector('#' + user);
	item.parentNode.removeChild(item);
}
