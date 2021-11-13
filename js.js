function computerPlay(){
    let options = ["Rock", "Paper", "Scissors"];
    let selction = Math.floor(Math.random()*3);
    return options[selction];
}


function playRound(playerSelection, computerSelection){
  
        if(playerSelection.toLowerCase() == "paper" && computerSelection == "Paper" || playerSelection.toLowerCase() == "rock" && computerSelection == "Rock" || playerSelection.toLowerCase() == "scissors" && computerSelection == "Scissors") {
            return("draw");
        } else if(playerSelection.toLowerCase() == "paper" && computerSelection == "Rock" || playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper" || playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors"){
           
            return("win");
        } else {
            return("loss");
        }
}

function game(){
    let playerScore = 0;
    let compScore = 0;
    
    for(i =0; i<=4; i++){
        let playerSelection = prompt("rock paper scissors");
        let computerSelection = computerPlay();
        
        if(playRound(playerSelection,computerSelection) == "win"){
            playerScore++;
        } else if(playRound(playerSelection,computerSelection) == "loss"){
            compScore++;
        }

        console.log(playRound(playerSelection, computerSelection));
        console.log("your score: " + playerScore);
        console.log("Computer score: " + compScore);
    }

   if(playerScore > compScore){
       console.log("You win!")
    } else if(playerScore == compScore){
        console.log("its a draw!");
    } else{
        console.log("you lose :(")
    }
 
  
    

}






