console.log("Hello World")

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let computerChoice = options[Math.floor(Math.random()*options.length)]
    return computerChoice
}

console.log(getComputerChoice())


function getHumanChoice() {   
    while (true) {
        let userInput = prompt("Choose one:\nrock  |  paper  |  scissors")
        if (userInput !== null) {
            let userChoice = userInput.toLowerCase()
            
            if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
                alert("You chose " + userChoice + "!")
                return userChoice
            }
            else {
                alert("You must enter a valid option!")
                continue             
            }
        }
        break
    }   
}

console.log(getHumanChoice())

// global
let humanScore = 0;
let computerScore = 0;

