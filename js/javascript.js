// QUIZ START
function doAnswer1() {
  document.getElementById("answer1").innerHTML = "Answer 1 is wrong!";
  document.getElementById("answer2").innerHTML = "";
  document.getElementById("answer3").innerHTML = "";
}
function doAnswer2() {
  document.getElementById("answer2").innerHTML = "Answer 2 is correct!";
  document.getElementById("answer1").innerHTML = "";
  document.getElementById("answer3").innerHTML = "";
}
function doAnswer3() {
  document.getElementById("answer3").innerHTML = "Answer 3 is wrong!";
  document.getElementById("answer1").innerHTML = "";
  document.getElementById("answer2").innerHTML = "";
}
// QUIZ END

// onstuffs and things START
function doSomething1() {
  console.log("ondblclick was triggered!");
}
function doSomething2() {
  console.log("oncontextmenu was triggered!");
}
function doSomething3() {
  console.log("onkeydown was triggered!");
}
function doSomething4() {
  console.log("onkeyup was triggered!");
}
// onstuffs and things END

// onMouseOver START
function doChange(tableo) {
  tableo.innerHTML = "x";
  //        console.log('true');
}
// onMouseOver END

// Codelock START
var cln01 = 0;
var clt01 = "clt01 ";
var cln02 = 1;
var clt02 = "clt02 ";

function clinput(onClick) {
  console.log(onClick.innerText);
  cln01++;
  cln02++;
  clt01 += "1";
  clt02 += "2";

  document.getElementById("clninput").innerHTML += " " + onClick.innerText;
}

var correctcode = "3812";
var results = "";

function codelock() {
  if (cln01 == correctcode) {
    results = correctcode;
  } else {
  }
}
// Codelock END

// onLoad START
function websiteLoaded() {
  document.getElementById("loadText").innerText = "success";
  console.log("The website has loaded!");
}
// onLoad END

// onClick + Show Time START
function changeText() {
  document.getElementById("changeThis").innerHTML = "No.";
  document.getElementById("dnt").innerHTML =
    "Current time:" + new Date().toTimeString();
}
// onClick + Show Time END

// some stuff I don't remember START
var tallA = "2";
var tallB = "2";
var tallAInput = "2";
var tallBInput = "2";
var lastChange = "a";

//calculate();

function calculate() {
  var resultatDiv = document.getElementById("resultat");
  tallAInput = document.getElementById("tallA");
  tallBInput = document.getElementById("tallB");
  console.log(tallAInput);
  tallA = parseInt(tallAInput.value);
  tallB = parseInt(tallBInput.value);
  resultatDiv.innerHTML = "";

  if (tallA == tallB) {
    resultatDiv.innerHTML += "== Tallene er like";
  } else {
    resultatDiv.innerHTML += "== <del>Tallene er like</del>";
  }

  if (tallA != tallB) {
    resultatDiv.innerHTML += "<br/>!= Tallene er ulike";
  } else {
    resultatDiv.innerHTML += "<br/>!= <del>Tallene er ulike</del>";
  }

  if (tallA >= tallB) {
    resultatDiv.innerHTML +=
      "<br/>>= " + tallA + " er større enn eller lik " + tallB;
  } else {
    resultatDiv.innerHTML +=
      "<br/>>= <del>" + tallA + " er større enn eller lik " + tallB + "</del>";
  }

  if (tallA > tallB) {
    resultatDiv.innerHTML += "<br/>> " + tallA + " er større enn " + tallB;
  } else {
    resultatDiv.innerHTML +=
      "<br/>> <del>" + tallA + " er større enn " + tallB + "</del>";
  }

  if (tallA <= tallB) {
    resultatDiv.innerHTML +=
      "<br/><= " + tallA + " er mindre enn eller lik " + tallB;
  } else {
    resultatDiv.innerHTML +=
      "<br/><= <del>" + tallA + " er mindre enn eller lik " + tallB + "</del>";
  }

  if (tallA < tallB) {
    resultatDiv.innerHTML += "<br/>< " + tallA + " er mindre enn " + tallB;
  } else {
    resultatDiv.innerHTML +=
      "<br/>< <del>" + tallA + " er mindre enn " + tallB + "</del>";
  }
}
// some stuff I don't remember END

// Clickergame START

var imageDiv = document.getElementById("image");
var pointsDiv = document.getElementById("pointsInfo");

// model
var points = 0;
var pointsPerClick = 1;

// controller
function changeImage() {
  points += pointsPerClick;
  show();
  console.log('changeImage LOGGED!');
}

function buyUpgrade() {
  if (points < 10) return;
  points -= 10;
  pointsPerClick++;
  show();
  console.log('buyUpgrade LOGGED!');
}

// view
function show() {
  imageDiv.innerHTML = points % 2 === 0 ? "😀" : "😃";
  pointsDiv.innerHTML = points;
  console.log('show LOGGED!');
}

// Clickergame END

// Multiple functions inside one function START
function multiFunc(trigEvent) {
  document.getElementById("info").innerHTML += "<li>" + trigEvent + "</li>";
}
// Multiple functions inside one function END

// RNG START
function tilfeldigFirkant() {
  var endX = tilfeldigTall(window.innerWidth * 0.2, window.innerWidth);
  var endY = tilfeldigTall(window.innerHeight * 0.2, window.innerHeight);

  var startX = tilfeldigTall(1, endX * 0.8);
  var startY = tilfeldigTall(1, endY * 0.8);
  var bredde = endX - startX;
  var høyde = endY - startY;
  var farge = tilfeldigFarge();
  var divHtml =
    '<div style="' +
    delAvStylePx("left", startX) +
    delAvStylePx("top", startY) +
    delAvStylePx("width", bredde) +
    delAvStylePx("height", høyde) +
    delAvStyle("background-color", farge) +
    '"></div>';
  document.write(divHtml);
  if (Math.random() < 0.9) tilfeldigFirkant();
}

function delAvStylePx(navn, verdi) {
  return delAvStyle(navn, verdi + "px");
}

function delAvStyle(navn, verdi) {
  return navn + ":" + verdi + ";";
}

function tilfeldigFarge() {
  return (
    "#" +
    tilfeldigTallEllerBokstavABCDEF() +
    tilfeldigTallEllerBokstavABCDEF() +
    tilfeldigTallEllerBokstavABCDEF() +
    tilfeldigTallEllerBokstavABCDEF() +
    tilfeldigTallEllerBokstavABCDEF() +
    tilfeldigTallEllerBokstavABCDEF()
  );
}

function tilfeldigTallEllerBokstavABCDEF() {
  var tall = tilfeldigTall(0, 15);
  if (tall < 10) return tall;
  const charCodeA = "a".charCodeAt(0);
  return String.fromCharCode(tall - 10 + charCodeA);
}

function tilfeldigTall(minimum, maksimum) {
  return minimum + Math.floor(Math.random() * (maksimum - minimum + 1));
}
// RNG END

// Calculator START
/*
var resultBox = document.getElementById("resultBox");

function addCharacter(x) {
  resultBox.innerHTML += x;
}

function calculate() {
  var calculation = resultBox.innerHTML.replace("×", "*").replace("÷", "/");
  resultBox.innerHTML = eval(calculation);
}
function clearResult() {
  resultBox.innerHTML = "";
}
*/
// Calculator END