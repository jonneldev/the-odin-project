const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorButton = document.querySelector("#scissorButton");
const div = document.querySelector("div");
const spanVs = document.querySelector("#spanVs");

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    spanC.textContent = computerSelection;
    div.appendChild(spanC)



    //Logic to determine the winner
    if (playerSelection === computerSelection) {
        console.log(`It's a tie! Your opponent also chose ${computerSelection}`);

        span.textContent = playerSelection;
        div.insertBefore(span, spanVs)
        
        
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        span.textContent = playerSelection;
        div.insertBefore(span, spanVs)
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        span.textContent = playerSelection;
        div.insertBefore(span, spanVs)
    }
}

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorButton.addEventListener("click", () => playRound("scissor"));

const span = document.createElement("span");
const spanC = document.createElement("span");
