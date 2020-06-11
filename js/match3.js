// hjelpevariabler for view og controller
let boardDiv = document.getElementById('board');

// model
let board = ['', '', '', '', '', '', '', '', ''];

// view
show();
function show() {
    let html = '';
    for (let i = 0; i < 9; i++) {
        let first = i % 3 == 0 ? 'first' : '';
        html += `<div onclick="setX(${i})" class="match3.cell color${board[i]} ${first}">${board[i]}</div>`;
    }
    boardDiv.innerHTML = html;
}

// controller
function setX(index) {
    console.log(index);
    if (board[index] === '') {
        board[index] = 'x';
        setO();
    }
    show();
}

function setO() {
    let blankIndexes = Array.from(board.keys()).filter(i => board[i] === '');
    if (blankIndexes.length === 0) return;
    let random = Math.floor(Math.random() * blankIndexes.length);
    let blankIndex = blankIndexes[random];
    board[blankIndex] = 'o';
    show();
}