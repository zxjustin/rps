let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const maxRounds = 5;

// Computer function
function getComputerChoice(x = Math.floor(Math.random() * 3)) {
  if (x == 0) {
    return "rock";
  }
  if (x == 1) {
    return "paper";
  }
  if (x == 2) {
    return "scissor";
  }
}

// Loop the rounds
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Draw");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
  console.log(`The Score now is Human:${humanScore} to Computer:${computerScore}`);

  roundCount++
  console.log(`${roundCount} rounds played`);
  if (roundCount === maxRounds)
    {
      declareWinner();
    }
}

function declareWinner(){
    if (humanScore > computerScore) {
      console.log("Congratulations You Won! Easy game.");
  } else if (computerScore > humanScore) {
      console.log("You Lost! The computer won how can you lose.");
  } else {
      console.log("TIED WITH A COMPUTER!");
  }
}
function playGame() {
  //Reset score
  humanScore = 0;
  computerScore = 0;
  roundCount = 0 ;
  
  // This function just starts the game loop, logic will be passed to `playRound` directly from button clicks now.
  console.log("Game has started! Playing 5 rounds");
}

// Adding the event listeners to the RPS buttons
const rpsButton = document.querySelectorAll(".rps-btn");

rpsButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (roundCount < maxRounds){
    const playSelection = button.id; // Get the player choice from button id
    const computerSelection = getComputerChoice(); // Get the computer's choice
    playRound(playSelection, computerSelection); // Play a round with both selections
    }
  });
});

const btn = document.querySelector("#play-btn");
btn.addEventListener("click", playGame);

