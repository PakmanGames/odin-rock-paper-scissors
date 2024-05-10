let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return getComputerChoice()
    }
}

function getHumanChoice() {
    console.log("Let's play Rock Paper Scissors!");
    return choice = prompt(`Pick one: "Rock", "Paper", or "Scissors"`);
}