let humanScore = 0
let computerScore = 0

console.log('User:' + getComputerChoice())
console.log('Comp:' + getHumanChoice())
//Computer function
function getComputerChoice(x = Math.floor(Math.random() * 3)){

    if (x == 0){
        return rock="rock"
    }
    
    if (x == 1)
    {
        return paper="paper"
    }

    if (x == 2)
    {
        return scissor="scissor"
    }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function getHumanChoice(){
    const userInput = prompt("Choose Rock, Paper or Scissor").toLowerCase();
    if ((userInput === "rock" || userInput === "paper" || userInput === "scissor")){
        return userInput
    }
    else {
        return ("Invalid input please key in Rock, Paper or Scissor")
    }
}

// function playRound(humanChoice, computerChoice){
    
// }


