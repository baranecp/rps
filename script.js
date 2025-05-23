let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "scissors";
    }
}

function playRound(playerSelection) {

    if (playerScore >= 5 || computerScore >= 5) return;

    const computerSelection = getComputerChoice();
    const resultDiv = document.getElementById("result");
    const scoreDiv = document.getElementById("score");

    if (playerSelection === computerSelection) {
        resultDiv.textContent = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        resultDiv.textContent = `You win this round! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        resultDiv.textContent = `Computer wins this round! ${computerSelection} beats ${playerSelection}`;
    }

    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore === 5) {
        resultDiv.textContent = "🎉 You won the game!";
    } else if (computerScore === 5) {
        resultDiv.textContent = "💀 Computer won the game!";
    }
}


const playerChoices = document.getElementById("playerChoices");
const buttons = playerChoices.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerSelection = button.textContent.toLowerCase();
        playRound(playerSelection);
    });
});