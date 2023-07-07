let randomNum = Math.floor(Math.random() * 3) + 1;


function getComputerchoice() {
    if (randomNum === 1) {
        return "rock"
    } else if (randomNum === 2) {
        return "paper"
    } else {
       return "scissor"
    }
}

let playerselection = prompt("rock, paper or scissor?");
let computerSelection = getComputerchoice();

console.log(computerSelection);
console.log(playerselection);

function playRound(playerselection, computerSelection) {
    if (playerselection === "rock" && computerSelection === "scissor" ||
        playerselection === "paper" && computerSelection === "rock" ||
        playerselection === "scissor" && computerSelection === "paper") {
        return `You won! ${playerselection} beats ${computerSelection}`
    } else if (playerselection === "rock" && computerSelection === "rock" ||
               playerselection === "paper" && computerSelection === "paper" ||
               playerselection === "scissor" && computerSelection === "scissor") {
        return `it's a draw! ${playerselection} and ${computerSelection} are the same!`
    } else {
        return `You Lost! ${computerSelection} beats ${playerselection}`
    }
}

console.log(playRound(playerselection, computerSelection));

