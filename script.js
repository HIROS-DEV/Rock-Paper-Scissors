let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const container = document.querySelector('.container');
const startBtn = document.querySelector('#start');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.querySelector('#reset');

let resultText = document.createElement('p');

function startGame() {
	startBtn.classList.add('invisible');
	rockBtn.classList.remove('invisible');
	paperBtn.classList.remove('invisible');
	scissorsBtn.classList.remove('invisible');
	resetBtn.classList.remove('invisible');
	resultText.innerText = '';
}

function resetGame() {
	startBtn.classList.remove('invisible');
	rockBtn.classList.add('invisible');
	paperBtn.classList.add('invisible');
	scissorsBtn.classList.add('invisible');
	resetBtn.classList.add('invisible');

	playerScore = 0;
	computerScore = 0;
	playerSelection = '';
	computerSelection = '';
}

function getComputerChoice() {
	const choiceArray = ['Rock', 'Paper', 'Scissors'];
	const randomNumber = Math.floor(Math.random() * choiceArray.length);
	const computerChoice = choiceArray[randomNumber];
	return computerChoice;
}

function printResultForWin() {
	playerScore += 1;
	resultText.innerText = `You Win! ${playerSelection} wins ${computerSelection}`;
	container.appendChild(resultText);
}

function printResultForLose() {
	computerScore += 1;
	resultText.innerText = `You Lose! ${playerSelection} beats ${computerSelection}`;
	container.appendChild(resultText);
}

function printResultForEven() {
	playerScore += 0;
	computerScore += 0;
	resultText.innerText = `Even! ${playerSelection} evens ${computerSelection}`;
	container.appendChild(resultText);
}

function printFinalResultForWin() {
	resultText.innerText = `Final Result: You Win! Your score is ${playerScore}. Computer score is ${computerScore}`;
	container.appendChild(resultText);
	resetGame();
}

function printFinalResultForLose() {
	resultText.innerText = `Final Result: You Lose! Your score is ${playerScore}. Computer score is ${computerScore}`;
	container.appendChild(resultText);
	resetGame();
}

function playRound(event) {
	playerSelection = event.target.innerText;
	computerSelection = getComputerChoice();

	if (playerSelection === computerSelection) {
		printResultForEven();
	}

	switch (playerSelection) {
		case 'Rock':
			if (computerSelection === 'Paper') {
				printResultForLose();
			} else if (computerSelection === 'Scissors') {
				printResultForWin();
			}

			break;
		case 'Paper':
			if (computerSelection === 'Scissors') {
				printResultForLose();
			} else if (computerSelection === 'Rock') {
				printResultForWin();
			}

			break;
		case 'Scissors':
			if (computerSelection === 'Rock') {
				printResultForLose();
			} else if (computerSelection === 'Paper') {
				printResultForWin();
			}
			break;
		default:
			break;
	}

	if (playerScore >= 5) {
		printFinalResultForWin();
	} else if (computerScore >= 5) {
		printFinalResultForLose();
	}
}

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

rockBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);
