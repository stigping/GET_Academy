// Model
let count = 0;
let numbers = [3, 5, 6, 8, 1, 0, 2, 4, 7];

// View
show();
function show() {
    let html = '';
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        let isBlank = number === 0;
        let numberText = isBlank ? '' : number;

        let firstInLine = i % 3 == 0 ? 'førstPåLinje' : '';

        html += `<div class="flis ${firstInLine}" onclick="clickedNumber(${i});">${numberText}</div>`;
    }
    html += `<div style="clear: both;">Antall trekk: ${count}</div>`;
    document.getElementById('numbers').innerHTML = html;
}

function clickedNumber(index) {
    let blankIndex = findBlankIndex(index);
    if (blankIndex == null) return;
    count++;
    numbers[blankIndex] = numbers[index];
    numbers[index] = 0;
    show();
}

function findBlankIndex(index) {
    for (let delta of [-3, -1, 1, 3]) {
        let newIndex = index + delta;
        if (newIndex < 0 || newIndex >= numbers.length) continue;
        if (numbers[newIndex] === 0) {
            return newIndex;
        }
    }
    return null;
}