// function that generates computer rps selections
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


// variable that contains the computers or players choice between "Rock, Paper or Scissor"
let computerSelection = "";
let playerselection = "";


// variables that stores the points
let playerScore = 0;
let computerScore = 0;


// all the querySelectors are here
const para = document.querySelector(".para");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const rock = document.querySelector(".rock");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");


rock.addEventListener("click", () => {
    playerselection = "Rock"
    computerSelection = getComputerchoice();
    referee()
})

paper.addEventListener("click", () => {
    playerselection = "Paper"
    computerSelection = getComputerchoice();
    referee()
})

scissor.addEventListener("click", () => {
    playerselection = "Scissor"
    computerSelection = getComputerchoice();
    referee()
})



console.log(playerselection);
console.log(computerSelection);



function playRound(playerselection, computerSelection) {
    if (playerselection === "Rock" && computerSelection === "Scissor" ||
        playerselection === "Paper" && computerSelection === "Rock" ||
        playerselection === "Scissor" && computerSelection === "Paper") {
        return para.textContent = `You Won! ${playerselection} Beat's ${computerSelection}`, 
               player.textContent = `Player Score: ${playerScore += 1}`
    } else if (playerselection === "Rock" && computerSelection === "Rock" ||
               playerselection === "Paper" && computerSelection === "Paper" ||
               playerselection === "Scissor" && computerSelection === "Scissor") {      
        return para.textContent = `It's a Draw! ${playerselection} and ${computerSelection} are the same!`;
    } else {                           
        return para.textContent = `You Lost! Computer's ${computerSelection} Beat's Your ${playerselection}`,
               computer.textContent = `Computer Score: ${computerScore += 1}`;
    }
}




//console.log(playRound(playerselection, computerSelection))

function round() {
    console.log(playerselection = prompt("Rock, Paper, Scissor").toLowerCase());
    console.log(computerSelection = getComputerchoice());
    console.log(playRound(playerselection, computerSelection));
}

function referee() {

    if (playerScore < 5 && computerScore !== 5) {
        playRound(playerselection, computerSelection)
    } if (playerScore === 5 && computerScore !== 5) {
        para.textContent = "Congratulation, You've Won!"
    } else if (computerScore === 5 && playerScore !== 5) {
        para.textContent = `Game Over`
    }
}

//for (;playerScore <= 4;) {
//    
//    round()
//
//    if (computerScore === 5) {
//        console.log("Game Over")
//    } else if (playerScore === 5) {
//        console.log("Congratulation, You've Won!")
//    }
//
//    if (computerScore === 5) break    
