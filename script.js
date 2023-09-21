function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();

  if (playerSelection == "rock") {
    return rock(computerSelection);
  } else if (playerSelection == "paper") {
    return paper(computerSelection);
  } else if (playerSelection == "scissors") {
    return scissors(computerSelection);
  } else {
    return "false";
  }
}

function rock(computerSelection) {
  if (computerSelection == "rock") {
    return "It's a draw! Rock and Rock";
  } else if (computerSelection == "paper") {
    return "You lose! Paper beats Rock";
  } else {
    return "You win! Rock beats Scissors";
  }
}

function paper(computerSelection) {
  if (computerSelection == "rock") {
    return "You win! Paper beats Rock";
  } else if (computerSelection == "paper") {
    return "It's a draw! Paper and Paper";
  } else {
    return "You lose! Scissors beats Paper";
  }
}

function scissors(computerSelection) {
  if (computerSelection == "rock") {
    return "You lose! Rock beats Scissors";
  } else if (computerSelection == "paper") {
    return "You win! Scissors beats paper";
  } else {
    return "It's a draw! Scissors and Scissors";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerChoice;
    while (true) {
      playerChoice = prompt(
        "What do you want to choose? Rock, Paper, or Scissors"
      );
      if (playRound(playerChoice) == "false") {
        alert(
          "That wasn't a valid response. Please input Rock, Paper, or Scissors"
        );
        continue;
      }
      break;
    }
    console.log(playRound(playerChoice));
  }
}

game();
