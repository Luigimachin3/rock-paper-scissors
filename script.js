
function getComputerChoice() {
  
    let options = ["Rock", "Paper", "Scissors"]
    let computerChoice = options[Math.floor(Math.random()*options.length)]
    return computerChoice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    choiceDiv = document.querySelector("#choice");
    resultsDiv = document.querySelector("#game-results");
    scoreDiv = document.querySelector("#score");

    function playRound(humanChoice, computerChoice) {

        const humanWins = 
        (humanChoice === "Paper" && computerChoice === "Rock") || 
        (humanChoice === "Scissors" && computerChoice === "Paper") || 
        (humanChoice === "Rock" && computerChoice === "Scissors");
        
        let message = "";    

        if (humanChoice === computerChoice) {
            message = "It's a tie! You both chose " + humanChoice;      
        } else if (humanWins) {
            humanScore++;
            message = "You win! " + humanChoice + " beats " + computerChoice + "!";
        } else {
            message = "You lose! " + computerChoice + " beats " + humanChoice + "!";
            computerScore++;
        }  

        choiceDiv.textContent = "You played " + humanChoice + ", Computer played " + computerChoice;
        resultsDiv.textContent = message;
        scoreDiv.textContent = "You " + humanScore + "-" + computerScore + " Computer";
        
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore === 5) {
                resultsDiv.textContent = "You win the game!";
            } else {
                resultsDiv.textContent = "Computer wins the game!";
            }
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }
    }
    rockBtn.addEventListener("click", () => playRound("Rock", getComputerChoice()));
    paperBtn.addEventListener("click", () => playRound("Paper", getComputerChoice()));
    scissorsBtn.addEventListener("click", () => playRound("Scissors", getComputerChoice()));
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

playGame();