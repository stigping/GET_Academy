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