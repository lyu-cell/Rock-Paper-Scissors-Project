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

let playerScore = 0;
let computerScore = 0;

function playRound(playerselection, computerSelection) {
    if (playerselection === "rock" && computerSelection === "scissor" ||
        playerselection === "paper" && computerSelection === "rock" ||
        playerselection === "scissor" && computerSelection === "paper") {
        return `You Won! ${playerselection} Beats ${computerSelection} (Player Score ${playerScore += 1})`;  
    } else if (playerselection === "rock" && computerSelection === "rock" ||
               playerselection === "paper" && computerSelection === "paper" ||
               playerselection === "scissor" && computerSelection === "scissor") {      
        return `It's a Draw! ${playerselection} and ${computerSelection} are the same!)`;
    } else {                           
        return `You Lost! ${computerSelection} Beats ${playerselection} (Computer Score ${computerScore += 1})`;
    }
}






console.log(playRound(playerselection, computerSelection))

function round() {
    console.log(playerselection = prompt("Rock, Paper, Scissor").toLowerCase());
    console.log(computerSelection = getComputerchoice());
    console.log(playRound(playerselection, computerSelection));
}



for (;playerScore <= 4;) {
    
    round()

    if (computerScore === 5) {
        console.log("Game Over")
    } else if (playerScore === 5) {
        console.log("Congratulation, You've Won!")
    }

    if (computerScore === 5) break    
}

