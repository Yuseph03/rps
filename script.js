//Random computer choice function
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSOR"];

    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

//Game stats for determining the winner
let playerWin = 0,
    computerWin = 0;

//Plays a round of RPS
function playRound(playerSelection, computerSelection) {
    if(computerSelection == "PAPER" && playerSelection == "ROCK") {
        computerWin++;
        console.log("You Lose! Paper beats Rock");
    }
    if(computerSelection == "SCISSOR" && playerSelection == "ROCK"){
        playerWin++;
        console.log("You Win! Rock beats Scissor");
    }
    if(computerSelection == "ROCK" && playerSelection == "ROCK") {
        console.log("It's a tie, you both chose Rock");
    }
    if(computerSelection == "PAPER" && playerSelection == "PAPER") {
        console.log("It's a tie, you both chose Paper");
    }
    if(computerSelection == "SCISSOR" && playerSelection == "PAPER"){
        computerWin++;
        console.log("You lose! Scissor beats Paper");
    }
    if(computerSelection == "ROCK" && playerSelection == "PAPER") {
        playerWin++;
        console.log("You win, paper beats rock");
    }
    if(computerSelection == "PAPER" && playerSelection == "SCISSOR") {
        playerWin++;
        console.log("You win, scissor beats paper");
    }
    if(computerSelection == "SCISSOR" && playerSelection == "SCISSOR"){
        console.log("It's a tie, you both chose scissor");
    }
    if(computerSelection == "ROCK" && playerSelection == "SCISSOR") {
        computerWin++
        console.log("You lose, rock beats scissor");
    }
    return [playerWin, computerWin];
}

//Game function, calls playround five times
function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();

        //Prompted choice for each round
        let playerSelection = prompt("Your choice for this round: ").toUpperCase()

        playRound(playerSelection, computerSelection);
     }
     
    if(playerWin > computerWin) {
        console.log("You won the game!");
    }
    else {
        console.log("You lost!");
    }
}
console.log(game()); 