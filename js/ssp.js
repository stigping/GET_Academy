let gameDiv = document.getElementById('game');
let resultsDiv = document.getElementById('results');

//model
let choice = ['rock', 'paper', 'scissors'];
let ranNum = null;
let playerChoice = '';
let cpuChoice = '';
let winner = 'Who will win?';


//view
showGame()

function showGame() {
    gameDiv.innerHTML = `<div class="ssp">
    <img id="rock" src="../img/rock.png" alt="" onclick="choose(choice[0])">
    <img id="paper" src="../img/paper.png" alt="" onclick="choose(choice[1])">
    <img id="scissors" src="../img/scissors.png" alt="" onclick="choose(choice[2])">
    </div>`;
    resultsDiv.innerHTML = `<div>Player has chosen ${playerChoice} and CPU has chosen ${cpuChoice}. <br/> ${winner}</div>`
}

//controller
function choose(t1) {
    playerChoice = t1;
    cpuChoose()
    checkResults()
    showGame()
}

function cpuChoose() {
    randomNum()
    if (ranNum == 0) {
        cpuChoice = choice[0]
    }
    if (ranNum == 1) {
        cpuChoice = choice[1]
    }
    if (ranNum == 2) {
        cpuChoice = choice[2]
    }
    console.log(cpuChoice)
}

function checkResults() {
    if (playerChoice === 'rock') {
        if (cpuChoice === 'scissors') {
            return winner = 'Winner Winner, Chicken Dinner!';
        } else {
            if (cpuChoice === 'paper') {
                return winner = 'That CPU strong af...';
            }
        } if (cpuChoice === 'rock') {
            return winner = 'Tie Game!';
        }
    }
    if (playerChoice === 'paper') {
        if (cpuChoice === 'rock') {
            return winner = 'Winner Winner, Chicken Dinner!';
        } else {
            if (cpuChoice === 'scissors') {
                return winner = 'That CPU strong af...';
            }
        } if (cpuChoice === 'paper') {
            return winner = 'Tie Game!';
        }
    }
    if (playerChoice === 'scissors') {
        if (cpuChoice === 'paper') {
            return winner = 'Winner Winner, Chicken Dinner!';
        } else {
            if (cpuChoice === 'rock') {
                return winner = 'That CPU strong af...';
            }
        } if (cpuChoice === 'scissors') {
            return winner = 'Tie Game!';
        }
    }
}

function randomNum(){
    ranNum = Math.floor(Math.random() * 3);
}


