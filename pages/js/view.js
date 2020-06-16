var contentDiv = document.getElementById('content');
var resultDiv = document.getElementById('result');
let input = document.getElementById('inputs');

//View
function show() {
    contentDiv.innerHTML = `
    <input id='inputs'>
    <input id='myBtn' type="button" onclick="makeText(inputs.value)" value="Clickme">
    <div id="answer">${answer}</div>
    `;
    //answer.innerText += translate(makeText);

    
}


input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13)
    {
        event.preventDefault()
        document.getElementById("myBtn").click();
    }
});