
const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() *3);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {

    let playerScore = 0;
    let computerScore = 0;
    
    //Player select
    playerSelection = prompt('Please choose..').toLowerCase();

    //Computer select
    computerSelection = getComputerChoice();

    //Logic to determine the winner
    if (playerSelection === computerSelection) {
        return `It's a tie! your opponent also choose ${computerSelection}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection ===
        'paper')
    ) {
        playerScore++
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++
        return `You lose! ${computerSelection} beats ${playerSelection}.`;

    }

}




  
  