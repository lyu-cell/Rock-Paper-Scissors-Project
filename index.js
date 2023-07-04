let randomNum = Math.floor(Math.random() * 3) + 1;


function getComputerchoice() {
    if (randomNum === 1) {
        console.log("Rock");
    } else if (randomNum === 2) {
        console.log("Paper");
    } else {
        console.log("Scissor")
    }
}
