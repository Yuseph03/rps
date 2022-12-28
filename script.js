//Random computer choice function
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSOR"];

    const random = Math.floor(Math.random() * 3);
    
    computerSelection = choices[random];

    return computerSelection;
}

const result = document.querySelector("#result");
const urWin = document.querySelector("#urScore");
const compWin = document.querySelector("#compScore")

let playerWin = 0,
    computerWin = 0;

//Plays a round of RPS
function playRound(playerSelection, computerSelection) {
    if(computerSelection == "PAPER" && playerSelection == "ROCK") {
        computerWin++;
        compWin.textContent = "Computer score: "+computerWin
        result.textContent = "You Lose! Paper beats Rock";
    }
    if(computerSelection == "SCISSOR" && playerSelection == "ROCK"){
        playerWin++;
        urWin.textContent = "Your score: "+playerWin
        result.textContent = "You Win! Rock beats Scissor";
    }
    if(computerSelection == "ROCK" && playerSelection == "ROCK") {
        result.textContent = "It's a tie, you both chose Rock";
    }
    if(computerSelection == "PAPER" && playerSelection == "PAPER") {
        result.textContent = "It's a tie, you both chose Paper";
    }
    if(computerSelection == "SCISSOR" && playerSelection == "PAPER"){
        computerWin++;
        compWin.textContent = "Computer score: "+computerWin
        result.textContent = "You lose! Scissor beats Paper";
    }
    if(computerSelection == "ROCK" && playerSelection == "PAPER") {
        playerWin++;
        urWin.textContent = "Your score: "+playerWin;
        result.textContent = "You win, paper beats rock";
    }
    if(computerSelection == "PAPER" && playerSelection == "SCISSOR") {
        playerWin++;
        urWin.textContent = "Your score: "+playerWin;
        result.textContent = "You win, scissor beats paper";
    }
    if(computerSelection == "SCISSOR" && playerSelection == "SCISSOR"){
        result.textContent = "It's a tie, you both chose scissor";
    }
    if(computerSelection == "ROCK" && playerSelection == "SCISSOR") {
        computerWin++
        compWin.textContent = "Computer score: "+computerWin
        result.textContent = "You lose, rock beats scissor";
    }
    if(playerWin >= 5){
        result.textContent = "You won the game!";
    }
    else if(computerWin >= 5){
        result.textContent = "GameOver! Computer won!";
    }
}

let rock = document.getElementById('rock').addEventListener("click", rockRound);;
let paper = document.getElementById('paper').addEventListener("click", paperRound);
let scissor = document.getElementById('scissor').addEventListener("click", scissRound);

    
function rockRound(){
    playerSelection = "ROCK";
    getComputerChoice() 
    playRound(playerSelection, computerSelection);
};

function paperRound(){
    playerSelection = "PAPER";
    getComputerChoice() 
    playRound(playerSelection, computerSelection);
};

function scissRound(){
    playerSelection = "SCISSOR";
    getComputerChoice() 
    playRound(playerSelection, computerSelection);
};


// if(playerWin == 5){
//     result.textContent = "You won the game!";
// }
// else if(computerWin == 5){
//     result.textContent = "GameOver! Computer won!";
// }