var DB = function(){}

DB.prototype.init = function() {
	var config = {
		apiKey: "AIzaSyA59ApVmWWpGlKnwem2ZFamFafVzaAy9iM",
		authDomain: "graffity-3f8b1.firebaseapp.com",
		databaseURL: "https://graffity-3f8b1.firebaseio.com",
		storageBucket: "graffity-3f8b1.appspot.com",
		messagingSenderId: "81084528216"
	};
	firebase.initializeApp(config);
};

DB.prototype.writeUserData = function(user,pass) {
	firebase.auth().createUserWithEmailAndPassword(user + "@graffity.cat", pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  showError(errorMessage);
});
}

DB.prototype.loginUser = function(user,pass) {
	var error = "";
	var load = document.querySelector('.submit_loader');
	firebase.auth().signInWithEmailAndPassword(user + "@graffity.cat", pass).then(function(){
		var login = document.querySelector(".login");
		login.style.display = "none";
		load.style.display = "none";
		APP.login.sendSubmit(user);
	}).catch(function(error){
	  // Handle Errors here.
	  load.style.display = "none";
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  var login = document.querySelector(".login");
	  login.style.display = "none";
	  showError(errorMessage);
	});
}