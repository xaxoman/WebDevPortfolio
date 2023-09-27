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
            // controlls the user input and calculates the score
            if(user == "rock" && random == rock) {  
                
                alert(`Both choose rock, interesting \n COMPUTER: ${punteggioComputer} YOU: ${punteggioUser}`)
            }
            


        }

        getComputerChoice();

    }

    

    