// hjelpevariabler for view og controller
let multiplicationMatrixDiv = document.getElementById('multiplicationMatrix');

// model
let columnCount = 5;
let multiplicationMatrix = [1,2,3,4,5,2,4,6,8,10,3,6,9,12,15,4,8,12,16,20,5,10,15,20,25];


// view
show();
function show() {
    let html = '';
    for (let i = 0; i < multiplicationMatrix.length; i++) {
        let number = multiplicationMatrix[i];
        html += `<div>${number}</div>`;
    }
    multiplicationMatrixDiv.innerHTML = html;
    multiplicationMatrixDiv.style.display = 'grid';
    multiplicationMatrixDiv.style.gridTemplateColumns = `repeat(${columnCount},40px)`;
}

// controller
function setColumnCount(value) {
    columnCount = value;
    multiplicationMatrix = [];
    for (let num01 = 1; num01 <= value; num01++) {
        for (let num2 = 1; num2 <= value; num2++) {
            multiplicationMatrix.push(num01 * num2);
        }
    }
    show();
}