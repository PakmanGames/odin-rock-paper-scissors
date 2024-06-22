const start = document.querySelector(".start");
const arena = document.querySelector(".arena");

const rpsBot = document.querySelector(".rps-3000");
const round = document.createElement("div");
const dialogue = document.createElement("div");
const scores = document.createElement("div");

const rockHand = document.querySelector(".rock");
const paperHand = document.querySelector(".paper");
const scissorsHand = document.querySelector(".scissors");

const imageNames = ["rock-hand.png", "paper-hand.png", "scissors-hand.png", "play-rock.png", "play-paper.png", "play-scissors.png"];
const images = [];
for (let i = 0; i < imageNames.length; i++) {
    images[i] = document.createElement("img");
    images[i].src = `./images/moves/${imageNames[i]}`;
    images[i].alt = imageNames[i];
    images[i].className = "move";
}

start.addEventListener("click", () => {
    arena.replaceChildren(round, rpsBot, dialogue, scores);
    unhide = document.querySelectorAll(".hidden");
    for (const hide of unhide) {
        hide.classList.remove("hidden");
    }

    playGame();
});

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
    // humanSelection = prompt(`Pick one: "Rock", "Paper", or "Scissors"`);
    humanSelection = humanSelection.toLowerCase();
    return humanSelection;
}

function playGame() {
    let roundNum = 1;
    let humanScore = 0;
    let computerScore = 0;
    
    let computerSelection = null;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            dialogue.textContent = "You lose! Paper beats Rock.";
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            dialogue.textContent = "You lose! Rock beats Scissors.";
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            dialogue.textContent = "You lose! Scissors beats Paper.";
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            dialogue.textContent = "You win! Rock beats Scissors.";
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            dialogue.textContent = "You win! Scissors beats paper.";
            console.log("You win! Scissors beats paper.");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            dialogue.textContent = "You win! Paper beats Rock.";
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } else {
        dialogue.textContent = "Draw occurred! Scores remain unchanged.";
        console.log("Draw occurred! Scores remain unchanged.");
        }
        roundNum++;
        scores.textContent = `The current scores are as follows: Human: ${humanScore} and Computer: ${computerScore}`;
        console.log(`The current scores are as follows: Human: ${humanScore} and Computer: ${computerScore}`);
    }

    round.textContent = `Round ${roundNum}`;
    console.log(`Round ${roundNum}`);

    dialogue.textContent = "RPS-3000 is waiting for you to make your move."

    rockHand.addEventListener("click", () => {
        computerSelection = getComputerChoice();
        console.log(computerSelection);
        playRound("rock", computerSelection);
    });
    paperHand.addEventListener("click", () => {
        computerSelection = getComputerChoice();
        console.log(computerSelection);
        playRound("paper", computerSelection);
    });
    scissorsHand.addEventListener("click", () => {
        computerSelection = getComputerChoice();
        console.log(computerSelection);
        playRound("scissors", computerSelection);
    });
}