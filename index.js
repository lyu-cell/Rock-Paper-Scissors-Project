function getComputerchoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
        return "Rock"
    } else if (randomNum === 2) {
        return "Paper"
    } else {
       return "Scissor"
    }
}

// let playerselection = prompt("Rock, Paper, Scissor").toLowerCase();

let computerSelection = getComputerchoice();
let playerselection = "";


console.log(playerselection);
console.log(computerSelection);

// let p = 1;
// let c = 1;
// let d = 1;
// 
// let player = p;
// let computer = c; 
// let draw = d;const 
const rock = document.querySelector(".rock");

rock.addEventListener("click", () => {
    playerselection = "Rock";
    playRound(playerselection, computerSelection)
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
    playerselection = "Paper";
    playRound(playerselection, computerSelection)
});

const scissor = document.querySelector(".scissor");
scissor.addEventListener("click", () => {
    playerselection = "Scissor"
    playRound(playerselection, computerSelection);
});
const para = document.querySelector(".para")

function playRound(playerselection, computerSelection) {
    if (playerselection === "Rock" && computerSelection === "Scissor" ||
        playerselection === "Paper" && computerSelection === "Rock" ||
        playerselection === "Scissor" && computerSelection === "Paper") {
        return para.textContent = `You Won! ${playerselection} Beats ${computerSelection}!`;  
    } else if (playerselection === "Rock" && computerSelection === "Rock" ||
               playerselection === "Paper" && computerSelection === "Paper" ||
               playerselection === "Scissor" && computerSelection === "Scissor") {      
        return para.textContent = `It's a Draw! ${playerselection} and ${computerSelection} are the same!`;
    } else {                           
        return para.textContent = `You Lost! ${computerSelection} Beats ${playerselection}!`;
    }
}





//console.log(playRound(playerselection, computerSelection))

/*function round() {
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



console.log(game())*/

