var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.classList.add('listItem');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("done"));
	li.appendChild(delBtn);
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.addEventListener("click","li.classList.toggle("done")";




