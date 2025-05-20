   // Create a function called getComputerChoice
     // Inside the function, create a variable to store a random number between 0 and 2
     // If the number is 0, the computer chooses Rock
     // If the number is 1, the computer chooses Paper
     // If the number is 2, the computer chooses Scissors
        function getComputerChoice() {
            const randomNumber = Math.floor(Math.random() * 3);
            if(randomNumber === 0) {
                return "Rock";
            } else if(randomNumber === 1) {
                return "Paper";
            } else {
                return "Scissors";
            }
        }

  // Create a function called getHumanChoice
    // Inside the function, prompt the user to choose Rock, Paper, or Scissors

        function getHumanChoice() {
            const humanChoice = prompt("Your choice: ");
            return humanChoice.toLocaleLowerCase();
        }



