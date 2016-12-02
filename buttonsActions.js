var buttons = document.getElementsByClassName("btn");

buttons.onclick = function(event) {
	var core = event.target.textContent;
	console.log(core);
}






/*for (var i = 0; i < buttons.length; i++) {
		
		buttons[i].onclick = function(event) {
			var core = event.target.textContent;
			console.log(core);
		}
	}*/