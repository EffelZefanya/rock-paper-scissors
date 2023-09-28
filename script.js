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

  if (playerSelection === "rock") {
    return rock(computerSelection);
  } else if (playerSelection == "paper") {
    return paper(computerSelection);
  } else if (playerSelection === "scissors") {
    return scissors(computerSelection);
  } else {
    return "false";
  }
}

function rock(computerSelection) {
  if (computerSelection === "rock") {
    return 0;
  } else if (computerSelection === "paper") {
    return -1;
  } else {
    return 1;
  }
}

function paper(computerSelection) {
  if (computerSelection == "rock") {
    return 1;
  } else if (computerSelection == "paper") {
    return 0;
  } else {
    return -1;
  }
}

function scissors(computerSelection) {
  if (computerSelection == "rock") {
    return -1;
  } else if (computerSelection == "paper") {
    return 1;
  } else {
    return 0;
  }
}

// Main Function
const buttons = document.querySelectorAll("button");
const displayResult = document.querySelector(".result");

let playerSelection = "";
let computerScore = 0;
let playerScore = 0;
let resultFromRound = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.id;
    resultFromRound = playRound(playerSelection);
    if (resultFromRound === 1) {
      playerScore += 1;
    } else if (resultFromRound === -1) {
      computerScore += 1;
    }


    if (resultFromRound === 1) {
      displayResult.innerHTML = "<h2>You win the round!</h2><br />";
    } else if (resultFromRound === 0) {
      displayResult.innerHTML = "<h2>It's a draw!</h2><br />";
    } else {
      displayResult.innerHTML = "<h2>You lose the round!</h2><br />";
    }

    displayResult.innerHTML += `<h2>Score is:<br /> Player: ${playerScore}<br /> Computer: ${computerScore}<br />`;
    if (playerScore === 5) {
      displayResult.innerHTML += "<h2>Player Win!</h2>";
    } else if (computerScore === 5) {
      displayResult.innerHTML += "<h2>Computer Win!</h2>";
    } else {
      displayResult.innerHTML += "<h2>Nobody Win Yet!</h2>";
    }
  });
});
