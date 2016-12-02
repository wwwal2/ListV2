function SolidList() {
	this.solidList = document.createElement("UL");

	this.add = function(a) {
		var addLi = new CreateLiAndAll(a);
		this.solidList.appendChild(addLi.listElement);
	}
}

function CreateLiAndAll (liText) {
	this.listElement = li();

	function li() {
		var newLi = document.createElement("LI");
		newLi.textContent = liText;
		newLi.appendChild(button("DELETE"));
		newLi.appendChild(button("INSERT"));
		newLi.appendChild(button("EDIT"));
		inputString.value = "";

		return newLi;
	} 

	function button(name) {
		var btn = document.createElement("BUTTON");
		btn.textContent = name;
		btn.className = "btn";
		btnArray.push(btn);

		return btn;
	}
}

var list = new SolidList();
document.body.appendChild(list.solidList);



