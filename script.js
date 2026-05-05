
function getComputerChoice() {
  
    let options = ["rock", "paper", "scissors"]
    let computerChoice = options[Math.floor(Math.random()*options.length)]
    return computerChoice;
}



function getHumanChoice() {   
    while (true) {
        let userInput = prompt("Choose one:\nrock  |  paper  |  scissors")
        if (userInput !== null) {
            let userChoice = userInput.toLowerCase();
            
            if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
                alert("You chose " + userChoice + "!");
                return userChoice;
            }
            else {
                alert("You must enter a valid option!");
                continue;          
            }
        }
        break;
    }   
}


function playGame(){
    let round = 1;
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === undefined) return;
        console.log("\nRound " + round + "\n-------\n");
        console.log("You chose " + humanChoice + "\nComputer chose " + computerChoice);
        round++;
        humanChoice = humanChoice.toLowerCase()
        if (humanChoice === computerChoice) {
            console.log("\nIt's a tie! You both chose " + humanChoice + "\n");
            
        } 
        else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "rock" && computerChoice === "scissors") {
            console.log("\nYou win! " + humanChoice + " beats " + computerChoice + "!")
            humanScore++;
            console.log("\nScore:" + "\nYou " + humanScore + " - " + computerScore + " Computer\n");
        }
        else {
            console.log("\nYou lose! " + computerChoice + " beats " + humanChoice + "!\n");
            computerScore++;
            console.log("\nScore:" + "\nYou " + humanScore + " - " + computerScore + " Computer\n");
        }
    }
    // Play 5 rounds
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    // Display Final Score
    console.log("\nFinal score: " + humanScore + " - " + computerScore);
    // Declare winner
    if (humanScore > computerScore) {
        console.log("\nYou win the game!");
    }
    else if (computerScore > humanScore) {
        console.log("\nComputer wins the game!");
    }
    else {
        console.log("\nIt's a tie game!");
    }

}




playGame();
