// create string variables playerSelection
// create string variables computerSelection

// ask the user "playerSelection: Rock or Paper or Scissors" and put answer in playerSelection
// If user's input do not equal "Rock" or "Paper" or "Scissors", this is error. So, show prompt message again.
// playerSelection must be case-incentive.
// put the computer's answer in computerSelection automatically.
// In this project, we use getComputerChoice function. So create it!!

// compare with playerSelection and computerSelection.
// In this project, we use playRound function(playRound function takes two parameters(playerSelection, computerSelection)).
// So create it!!

// This is not a single round game. Multiple rounds game. We should create round function for multiple games.
// Create game function and call the playRound function inside it. game function should use loops (for or while)
// must be keep score(s) and report winner (create scores variable, and show message)

// If game ends, once more function and reset previous all data.

let playerScore = 0;
let computerScore = 0;

function getPlayerSelection() {
	const playerChoice = prompt('Rock! Paper! Scissors!');
	if (!playerChoice) return;

	const playerChoiceCaseInsensitive =
		playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();

	if (
		playerChoiceCaseInsensitive === 'Rock' ||
		playerChoiceCaseInsensitive === 'Paper' ||
		playerChoiceCaseInsensitive === 'Scissors'
	) {
		return playerChoiceCaseInsensitive;
	} else {
		alert('Please input "Rock" or "Paper" or "Scissors". \n Case Insensitive.');
		return getPlayerSelection();
	}
}

function getComputerChoice() {
	const choiceArray = ['Rock', 'Paper', 'Scissors'];
	const randomNumber = Math.floor(Math.random() * choiceArray.length);
	const computerChoice = choiceArray[randomNumber];
	return computerChoice;
}

function playRound(playerSelection, computerSelection) {
	console.log(playerSelection, computerSelection);

	if (playerSelection === computerSelection) {
		playerScore += 0;
		computerScore += 0;
		return alert(`Even! ${playerSelection} evens ${computerSelection}`);
	}

	switch (playerSelection) {
		case 'Rock':
			if (computerSelection === 'Paper') {
				computerScore += 1;
				alert(`You Lose! ${playerSelection} beats ${computerSelection}`);
			} else if (computerSelection === 'Scissors') {
				playerScore += 1;
				alert(`You Win! ${playerSelection} wins ${computerSelection}`);
			}
			break;
		case 'Paper':
			if (computerSelection === 'Scissors') {
				computerScore += 1;
				alert(`You Lose! ${playerSelection} beats ${computerSelection}`);
			} else if (computerSelection === 'Rock') {
				playerScore += 1;
				alert(`You Win! ${playerSelection} wins ${computerSelection}`);
			}
			break;
		case 'Scissors':
			if (computerSelection === 'Rock') {
				computerScore += 1;
				alert(`You Lose! ${playerSelection} beats ${computerSelection}`);
			} else if (computerSelection === 'Paper') {
				playerScore += 1;
				alert(`You Win! ${playerSelection} wins ${computerSelection}`);
			}
			break;
		default:
			break;
	}
}

function game() {
	for (let i = 1; i <= 5; i++) {
		const playerSelection = getPlayerSelection();
		const computerSelection = getComputerChoice();

		if (!playerSelection) {
			return alert(`Pushed cancel button. Stop the game.`);
		}

		playRound(playerSelection, computerSelection);
	}

	if (playerScore > computerScore) {
		alert(
			`Final Result: You Win! Your score is ${playerScore}. Computer score is ${computerScore}`
		);
	} else if (playerScore === computerScore) {
		alert(
			`Final Result: Draw! Your score is ${playerScore}. Computer score is ${computerScore}`
		);
	} else {
		alert(
			`Final Result: You Lose! Your score is ${playerScore}. Computer score is ${computerScore}`
		);
	}

	const retry = prompt('Do you want to play game again?', 'one more!!');
	if (retry === 'one more!!') {
		playerScore = 0;
		computerScore = 0;
		game();
	} else {
		playerScore = 0;
		computerScore = 0;
		return;
	}
}

game();
