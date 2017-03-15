function initErrors(){
	closeError();
	closeGuia();
}

function showError(text){
	document.querySelector('#error').innerText = text;
	document.querySelector('.errors-petits-container').style.display = "flex";
}

function closeError(){
	var but = document.querySelector('.closeError');
	but.onclick = function(){
		document.querySelector('.errors-petits-container').style.display = "none";
	}
}

function closeGuia(){
	var but = document.querySelector('.closeGuia');
	but.onclick = function(){
		document.querySelector('.guia').style.display = "none";
	}
}

initErrors();