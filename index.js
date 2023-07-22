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

let p = 1;
let c = 1;
let d = 1;

let player = p;
let computer = c; 
let draw = d;

function playRound(playerselection, computerSelection) {
    if (playerselection === "rock" && computerSelection === "scissor" ||
        playerselection === "paper" && computerSelection === "rock" ||
        playerselection === "scissor" && computerSelection === "paper") {
        return `You Won! ${playerselection} Beats ${computerSelection} (Player Score ${player = p++})`;  
    } else if (playerselection === "rock" && computerSelection === "rock" ||
               playerselection === "paper" && computerSelection === "paper" ||
               playerselection === "scissor" && computerSelection === "scissor") {      
        return `It's a Draw! ${playerselection} and ${computerSelection} are the same! (Draw ${draw = d++})`;
    } else {                           
        return `You Lost! ${computerSelection} Beats ${playerselection} (Computer Score ${computer = c++})`;
    }
}






console.log(playRound(playerselection, computerSelection))

function round() {
    console.log(playerselection = prompt("Rock, Paper, Scissor").toLowerCase());
    console.log(computerSelection = getComputerchoice());
    console.log(playRound(playerselection, computerSelection));
}



function game() {
    round()
    round()
    round()
    round()
    if (player === 5 || player === 4 && computer === 1 || player === 3 && computer === 2 ||
        player === 2 && computer === 1 && draw === 2 || player === 3 && computer === 1 && draw === 1 ||
        player === 1 && draw === 4 || player === 2 && draw === 3 || player === 3 && draw === 2 || 
        player === 4 && draw === 1) {
            console.log("Congratulation! You've Won!")
    } 
    
    else if (computer === 5 || computer === 4 && player === 1 || computer === 3 && player === 2 ||
             computer === 2 && player === 1 && draw === 2 || computer === 3 && player === 1 && draw === 1 || 
             computer === 1 && draw === 4 || computer === 2 && draw === 3 || computer === 3 &&  draw === 2 ||
             computer === 4 && draw === 1) {
                console.log("Game Over, Better Luck Next Time!")
               } else {
                console.log("Draw, Try Again!")
               }
}



console.log(game())
