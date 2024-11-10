let getRockButton = document.getElementById("rock");
let getPaperButton = document.getElementById("paper");
let getScissorsButton = document.getElementById("scissors");
let resultDiv = document.getElementById("result");
getRockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
getPaperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
getScissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()))

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
  let humanInput = `<span>Human choice: ${humanChoice}</span>`;
  let computerGuess=`<span>Computer choice: ${computerChoice}</span>`;
  resultDiv.innerHTML+=humanInput+"<br>"+computerGuess+"<br>";

  if (humanChoice === computerChoice) {
    resultDiv.innerHTML+="<span>It's a draw!</span><br>";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    resultDiv.innerHTML+="<span>Human wins this round!</span><br>";
    humanScore++;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    resultDiv.innerHTML+="Computer wins this round!<br>";
    computerScore++;
  } 

  resultDiv.innerHTML+= `<span>Scores: Human: ${humanScore}, Computer: ${computerScore}</span><br>`;
    if(humanScore===5||computerScore===5){
      announceWinner(humanScore,computerScore);
    }
  }
  function announceWinner(){
    if(humanScore>computerScore){
      resultDiv.innerHTML+=`<span>Human Won The Game</span>`
    }
    else if(computerScore>humanScore){
   resultDiv.innerHTML += `<span>Computer Won The Game</span>`
    }
  }




