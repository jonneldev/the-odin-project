const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {

    //Player select
    playerSelection = prompt('Please choose..').toLowerCase();

    //Computer select
    computerSelection = getComputerChoice();

    //Logic to determine the winner
    if (playerSelection === computerSelection) {
        console.log(`It's a tie! your opponent also choose ${computerSelection}`);
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}


