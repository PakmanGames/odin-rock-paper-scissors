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

function getHumanImage(humanChoice) {
    if (humanChoice == "rock") {
        return images[0];
    } else if (humanChoice == "paper") {
        return images[1];
    } else if (humanChoice == "scissors") {
        return images[2];
    }
}

function getComputerImage(computerChoice) {
    if (computerChoice == "rock") {
        return images[3];
    } else if (computerChoice == "paper") {
        return images[4];
    } else if (computerChoice == "scissors") {
        return images[5];
    }
}

function playGame() {
    let roundNum = 1;
    let humanScore = 0;
    let computerScore = 0;

    let computerSelection = null;

    function playRound(humanChoice, computerChoice) {
        arena.style.padding = "30px 30px 0px 30px"

        if (roundNum > 1) {
            arena.removeChild(arena.lastChild);
            arena.removeChild(arena.lastChild);
        }

        round.textContent = `Round ${roundNum}`;

        arena.appendChild(getComputerImage(computerChoice));
        arena.appendChild(getHumanImage(humanChoice));

        if (humanChoice === "rock" && computerChoice === "paper") {
            dialogue.textContent = "You lose! Paper beats Rock.";
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            dialogue.textContent = "You lose! Rock beats Scissors.";
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            dialogue.textContent = "You lose! Scissors beats Paper.";
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            dialogue.textContent = "You win! Rock beats Scissors.";
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            dialogue.textContent = "You win! Scissors beats paper.";
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            dialogue.textContent = "You win! Paper beats Rock.";
            humanScore++;
        } else {
        dialogue.textContent = "Draw occurred! Scores remain unchanged.";
        }
        roundNum++;
        scores.textContent = `The current scores are as follows: Human: ${humanScore} and Computer: ${computerScore}`;

        if (humanScore == 5 || computerScore == 5) {
            round.textContent = "GAME OVER";
            const buttons = document.querySelectorAll("button");
            for (const button of buttons) {
                button.classList.add("hidden");
            }
            setTimeout(() => {
                if (humanScore == 5) {
                    dialogue.textContent = "You've defeated RPS-3000!";
                } else if (computerScore == 5) {
                    dialogue.textContent = "You suffer a humiliating defeat.";
                }
                arena.removeChild(arena.lastChild);
                arena.removeChild(arena.lastChild);
                arena.style.padding = "30px";
            }, 2000);
        }
    }

    dialogue.textContent = "RPS-3000 is waiting for you to make your move."

    rockHand.addEventListener("click", () => {
        computerSelection = getComputerChoice();
        playRound("rock", computerSelection);
    });
    paperHand.addEventListener("click", () => {
        computerSelection = getComputerChoice();
        playRound("paper", computerSelection);
    });
    scissorsHand.addEventListener("click", () => {
        computerSelection = getComputerChoice();
        playRound("scissors", computerSelection);
    });
}