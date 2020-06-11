var startTime = new Date().getTime();
var finishTime = new Date().getTime();
var spentMilliseconds = Math.floor(finishTime - startTime);
var spentSeconds = spentMilliseconds / 1000;

var startTime = new Date().getTime();

turnOnRandom();

function turnOnRandom() {
	var elementsList = document.getElementsByClassName("lamp");
	var randomIndex = Math.floor(Math.random() * elementsList.length);
	var selectedElement = elementsList[randomIndex];
	var selectedElementClassList = selectedElement.classList;
	selectedElementClassList.add("lightOn");
}

function turnOff(selectedElement) {
	var selectedElementClassList = selectedElement.classList;
	if (selectedElementClassList.contains("lightOn")) {
		var finishTime = new Date().getTime();
		var spentMilliseconds = Math.floor(finishTime - startTime);
		var spentSeconds = spentMilliseconds / 1000;
		document.getElementById("info").innerHTML = "Du brukte " + spentSeconds + " sekunder.";
		startTime = new Date().getTime();
		selectedElementClassList.remove("lightOn");
		turnOnRandom();
	}
}
