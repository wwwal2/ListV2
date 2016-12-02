var btnArray = [];

function GetButtonsWorking(){

	this.onclick = function(event) {
		var core = event.target.textContent;
		console.log(core);
	}
}
