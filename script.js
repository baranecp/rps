// Create a function called getComputerChoice
// Inside the function, create a variable to store a random number between 0 and 2
// If the number is 0, the computer chooses Rock
// If the number is 1, the computer chooses Paper
// If the number is 2, the computer chooses Scissors
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber)
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2){
        return "scissors";
    }
}

// Create a function called getHumanChoice
// Inside the function, prompt the user to choose Rock, Paper, or Scissors
function getHumanChoice() {
    const humanChoice = prompt("Your choice: ");
    return humanChoice.toLocaleLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
         if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "rock" && computerChoice === "scissors") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
        } else {
            console.log("It's a tie!")
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Final score: ");
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
}

playGame();