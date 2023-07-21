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
            // if (player >= 2 || player >= 3) {
            //     console.log("Congratulation! You have Won!");
            // }
        return `You Won! ${playerselection} Beats ${computerSelection} (Player Score ${player = p++})`;  
    } else if (playerselection === "rock" && computerSelection === "rock" ||
               playerselection === "paper" && computerSelection === "paper" ||
               playerselection === "scissor" && computerSelection === "scissor") {
                // if (draw ===  && computer === 2 || player === 1 && computer === 1){
                //     console.log ("Game Draw!");
                // }      
        return `It's a Draw! ${playerselection} and ${computerSelection} are the same! (Draw ${draw = d++})`;
    } else {
        // if (computer >= 2 || computer >= 3) {
        //     console.log("Game Over");
        // }                           
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
}

console.log(game())

//if (player >= 2 && computer < 2 || player <= 3 && computer < 3 || player === 4 || player = 5) {
//    console.log("Congratulation! You have Won The Game!")
//} else if (computer >= 2 && player < 2 || computer <= 3 && player < 3 || computer = 4 || computer = 5) {
//    console.log("Game Over, You lost!")
//} else {
//    console.log("Draw! try again!")
//}


// problem: how to compare the points, so that, whenever one wins 3 time the the game announces the winner 
//          and stops further execution of the game?
// 
// algorithm: 
// 
// 1. give points to the three player, computer and Draw elements whenever the condition for assigning the 
//    points to the respactive variable is true,
// 
// 2. inside the function first run one round of game, then right below it in the if statment condition cheak
//    if the specified condition is true if it is the in will be true and any other 