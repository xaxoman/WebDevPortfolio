 let punteggioComputer = 0; 
 let punteggioUser = 0;
 
  
  while(punteggioUser || punteggioComputer!=3) { // the for loop ends when the score is equal to 3 

        function getComputerChoice(){

            let rock = 0;
            let paper = 1;
            let scissors = 2;

            // User input
            let user = prompt("Rock paper or scissors, choose wisely? (write lowercase)");
            // generates a random number that is equal to the first three variables
            let random = Math.floor(Math.random() * 3);

            //Calculates the score for rock
            if (user == "rock" && random == paper) {
                punteggioComputer = punteggioComputer+1
                alert(`You: Rock \nComputer: Paper \n\nPaper beats rock, i know it sounds strange.. how can a paper beat a rock?\n\nCOMPUTER: ${punteggioComputer} YOU: ${punteggioUser}`)
            }
            else if (user == "rock" && random == scissors) {
                punteggioUser = punteggioUser+1
                alert(`You: Rock \nComputer: Scissors \n\nRock beats scissors \n\nCOMPUTER: ${punteggioComputer} YOU: ${punteggioUser}`)
            }
            

            // controlls if both choices match
            if(user == "rock" && random == rock) {  
                
                alert(`Both choose rock, interesting \n COMPUTER: ${punteggioComputer} YOU: ${punteggioUser}`)
            }
            else if(user == "paper" && random == paper) {  
                
                alert(`Both choose paper, interesting \n COMPUTER: ${punteggioComputer} YOU: ${punteggioUser}`)
            }
            else if(user == "scissors" && random == scissors) {  
                
                alert(`Both choose scissors, interesting \n COMPUTER: ${punteggioComputer} YOU: ${punteggioUser}`)
            }



        }

        getComputerChoice();
        // Declares the winner
        if(punteggioComputer == 3) {

            alert("A COMPUTER BEATED YOU, LOL");
        }
        if(punteggioUser == 3) {

            alert("YOU WON, YOU'RE A TOP G");
        }
    }

    

    