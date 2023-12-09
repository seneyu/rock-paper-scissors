let player = 0;
let computer = 0;

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const currentGame = document.getElementById("currentGame");
const finalGame = document.getElementById("finalGame");

btnRock.addEventListener("click", () => handleButtonClick("Rock"));
btnPaper.addEventListener("click", () => handleButtonClick("Paper"));
btnScissors.addEventListener("click", () => handleButtonClick("Scissors"));

function handleButtonClick(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  playerScore.textContent = `Your Score: ${player}`;
  computerScore.textContent = `Computer Score: ${computer}`;
  if (player === 5) finalGame.textContent = "Game finished. You win!";
  if (computer === 5) finalGame.textContent = "Game finished. Computer wins!";
  console.log(result);
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) return `Rock`;
  else if (computerChoice === 2) return `Paper`;
  else return `Scissors`;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) currentGame.textContent = "TIES";
  else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    currentGame.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    return (player += 1);
  } else {
    currentGame.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    return (computer += 1);
  }
}
