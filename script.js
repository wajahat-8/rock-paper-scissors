let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
function getHumanChoice() {
  let choice = prompt("enter rock, paper, or scissors");
  return choice.toLowerCase();
}
function playRound(humanChoice, computerChoice) {
  console.log(`Human choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("Human wins this round!");
    humanScore++;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    console.log("Computer wins this round!");
    computerScore++;
  } else {
    console.log("Invalid choice! Please enter rock, paper, or scissors.");
  }

  console.log(`Scores: Human: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
    if (humanScore > computerScore) {
      console.log("Human wins the game!");
    } else if (computerScore > humanScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("The game is a draw!");
    }
}
playGame();
