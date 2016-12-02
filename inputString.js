var inputString = document.createElement("INPUT");
inputString.value = "TYPE IN HERE";

inputString.onfocus = function() {
	if (this.value == 'TYPE IN HERE') {
		this.value = '';
	}
};

inputString.onkeypress = function(e){      
	if(e.keyCode == 13) {
		e.preventDefault();
		list.add(inputString.value);
	}
};

document.body.appendChild(inputString);






