function getComputerchoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        return "rock"
    } else if (randomNum === 2) {
        return "paper"
    } else {
       return "scissor"
    }
}

let playerselection = prompt("Rock, Paper, Scissor").toLowerCase();
let computerSelection = getComputerchoice();


console.log(playerselection);
console.log(computerSelection);

function playRound(playerselection, computerSelection) {
    if (playerselection === "rock" && computerSelection === "scissor" ||
        playerselection === "paper" && computerSelection === "rock" ||
        playerselection === "scissor" && computerSelection === "paper") {
        return `You won! ${playerselection} beats ${computerSelection}`;
        
    } else if (playerselection === "rock" && computerSelection === "rock" ||
               playerselection === "paper" && computerSelection === "paper" ||
               playerselection === "scissor" && computerSelection === "scissor") {
        return `it's a draw! ${playerselection} and ${computerSelection} are the same!`;
    } else {
        return `You Lost! ${computerSelection} beats ${playerselection}`;
    }
}

console.log(playRound(playerselection, computerSelection))


/*desire: to play the game five rounds and record the number

algorithm: 

1. The number generation function have to run multiple times without refreshing
   the page. (completed)

2. round two start after completion of round one so on.

3. on each round player or computer will recive point.

4. whoever reaches the 3 point mark first wins the game and that the 
   condition of the end of the game.
*/