let humanScore = 0;
let computerScore = 0;

//Computer function
function getComputerChoice(x = Math.floor(Math.random() * 3)){

    if (x == 0){
        return "rock";
    }
    
    if (x == 1)
    {
        return "paper";
    }

    if (x == 2)
    {
        return "scissor";
    }
}
//User input function
function getHumanChoice(){
    const userInput = prompt("Choose Rock, Paper or Scissor").toLowerCase();
    if ((userInput === "rock" || userInput === "paper" || userInput === "scissor")){
        return userInput;
    }
    else {
        alert("Invalid input please key in Rock, Paper or Scissor");
        return getHumanChoice();
    }
}
//Loop the rounds
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("Draw");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper") 
    ){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        humanScore++
    }
    else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    console.log(`The Score now is Human:${humanScore} to Computer:${computerScore}`)
}
function playGame(){
//Reset score
    humanScore = 0;
    computerScore = 0;
// Loop 5 rounds
    for (let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations You Won! Easy game.");
    } else if (computerScore > humanScore) {
        console.log("You Lost! The computer won how can you lose.");
    } else {
        console.log("TIED WITH A COMPUTER!");
    }
}
playGame();


