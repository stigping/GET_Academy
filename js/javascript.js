function doAnswer1() {
    document.getElementById('answer1').innerHTML = 'Answer 1 is wrong!';
    document.getElementById('answer2').innerHTML = '';
    document.getElementById('answer3').innerHTML = '';
}
function doAnswer2() {
    document.getElementById('answer2').innerHTML = 'Answer 2 is correct!';
    document.getElementById('answer1').innerHTML = '';
    document.getElementById('answer3').innerHTML = '';
}
function doAnswer3() {
    document.getElementById('answer3').innerHTML = 'Answer 3 is wrong!';
    document.getElementById('answer1').innerHTML = '';
    document.getElementById('answer2').innerHTML = '';
}

function doSomething1() {
    console.log('ondblclick was triggered!');
}
function doSomething2() {
    console.log('oncontextmenu was triggered!');
}
function doSomething3() {
    console.log('onkeydown was triggered!');
}
function doSomething4() {
    console.log('onkeyup was triggered!');
}

function doChange(tableo) {
        tableo.innerHTML = 'x';
//        console.log('true');
}

var cln01 = 0;
var clt01 = 'clt01 ';
var cln02 = 1;
var clt02 = 'clt02 ';

function clinput(onClick) {
console.log(onClick.innerText)
    cln01++;
    cln02++;
    clt01 += '1';
    clt02 += '2';

    document.getElementById('clninput').innerHTML +=
        ' ' + onClick.innerText;
        
}

var correctcode = '3812';
var results = '';

function codelock() {
    if (cln01 == correctcode) {
        results = correctcode;
    } else {
    }
}

function websiteLoaded() {
    document.getElementById('loadText').innerText = 'success';
    console.log('The website has loaded!');
}

function changeText() {
    document.getElementById('changeThis').innerHTML = 'No.';
    document.getElementById('dnt').innerHTML = 'Current time:' + new Date().toTimeString();
}


var tallA = '2';
var tallB = '2';
var tallAInput = '2';
var tallBInput = '2';
var lastChange = 'a';

//calculate();

function calculate() {
    var resultatDiv = document.getElementById('resultat');
    tallAInput = document.getElementById('tallA');
    tallBInput = document.getElementById('tallB');
    console.log(tallAInput);
    tallA = parseInt(tallAInput.value);
    tallB = parseInt(tallBInput.value);
    resultatDiv.innerHTML = '';

    if (tallA == tallB) {
        resultatDiv.innerHTML += '== Tallene er like';
    } else {
        resultatDiv.innerHTML += '== <del>Tallene er like</del>';
    }

    if (tallA != tallB) {
        resultatDiv.innerHTML += '<br/>!= Tallene er ulike';
    } else {
        resultatDiv.innerHTML += '<br/>!= <del>Tallene er ulike</del>';
    }

    if (tallA >= tallB) {
        resultatDiv.innerHTML += '<br/>>= ' + tallA + ' er større enn eller lik ' + tallB;
    } else {
        resultatDiv.innerHTML += '<br/>>= <del>' + tallA + ' er større enn eller lik ' + tallB + '</del>';
    }

    if (tallA > tallB) {
        resultatDiv.innerHTML += '<br/>> ' + tallA + ' er større enn ' + tallB;
    } else {
        resultatDiv.innerHTML += '<br/>> <del>' + tallA + ' er større enn ' + tallB + '</del>';
    }

    if (tallA <= tallB) {
        resultatDiv.innerHTML += '<br/><= ' + tallA + ' er mindre enn eller lik ' + tallB;
    } else {
        resultatDiv.innerHTML += '<br/><= <del>' + tallA + ' er mindre enn eller lik ' + tallB + '</del>';
    }

    if (tallA < tallB) {
        resultatDiv.innerHTML += '<br/>< ' + tallA + ' er mindre enn ' + tallB;
    } else {
        resultatDiv.innerHTML += '<br/>< <del>' + tallA + ' er mindre enn ' + tallB + '</del>';
    }
}

var imageDiv = document.getElementById('objectClick');
var pointsDiv = document.getElementById('pointsInfo');

// model
var points = 0;
var pointsPerClick = 1;

// controller
function changeImage() {
    points += pointsPerClick;
    show();
}

function buyUpgrade() {
    if (points < 10) return;
    points -= 10;
    pointsPerClick++;
    show();
}

// view
//show();
function show() {
    imageDiv.innerHTML = points % 2 === 0 ? '😆' : '😁';
    pointsDiv.innerHTML = points;
}

function multiFunc(trigEvent){
    document.getElementById('info').innerHTML += '<li>' + trigEvent + '</li>' ;
}

