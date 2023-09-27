function getComputerChoice(){

    let rock = 0;
    let paper = 1;
    let scissors = 2;
    let random = Math.floor(Math.random() * 3);
    if(random == rock) {

        console.log("Computer: ROCK");
    }

    else if(random == paper) {

        console.log("Compuer: PAPER");
    }

    else if(random == scissors) {

        console.log("Compuer: SCISSORS");
    }

}

getComputerChoice();