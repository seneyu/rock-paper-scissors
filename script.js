function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) return `Rock`;
  else if (computerChoice === 2) return `Paper`;
  else {
    return `Scissors`;
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  if (playerSelection === computerSelection) return "TIES";
  else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let counter = 0;
  while (counter < 5) {
    const playerSelection = prompt(
      "Please choose one: Rock, Papper, or Scissors"
    );
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    counter += 1;
  }
  return counter;
}

// console.log(playRound(playerSelection, computerSelection));
const fiveRounds = game();
console.log(fiveRounds);
