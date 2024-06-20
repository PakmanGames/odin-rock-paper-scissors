function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return getComputerChoice()
    }
}

function getHumanChoice() {
    console.log("Let's play Rock Paper Scissors!");
    humanSelection = prompt(`Pick one: "Rock", "Paper", or "Scissors"`);
    humanSelection = humanSelection.toLowerCase();
    return humanSelection;
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let roundNum = 1;
    let humanSelection = null;
    let computerSelection = null;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } else {
        console.log("Draw occurred! Scores remain unchanged.");
        }
        console.log(`The current scores are as follows: Human: ${humanScore} and Computer: ${computerScore}`);
    }

    console.log(`Round ${roundNum}`);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    roundNum++;

    console.log(`Round ${roundNum}`);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    roundNum++;

    console.log(`Round ${roundNum}`);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    roundNum++;

    console.log(`Round ${roundNum}`);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    roundNum++;

    console.log(`Round ${roundNum}`);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    roundNum++;
}

playGame();