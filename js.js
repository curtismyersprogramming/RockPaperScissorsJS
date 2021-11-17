let userScore = 0;
let compScore = 0;
const userScore_Span = document.getElementById("user-score");
const compScore_Span = document.getElementById("computer-score");
const rock_button = document.getElementById("rock-button");
const paper_button = document.getElementById("paper-button");
const scissors_button = document.getElementById("scissors-button");
const result = document.querySelector(".result > p");


//event listeners//

    //Buttons//
    rock_button.addEventListener('click',function(){
        playRound("Rock",computerPlay());
    })

    paper_button.addEventListener('click',function(){
        playRound("Paper",computerPlay());
    })

    scissors_button.addEventListener('click',function(){
        playRound("Scissors",computerPlay());
    })






// game functionality //

    //game outcomes

    function  win(playerSelection, computerSelection){
        userScore++;
        userScore_Span.innerHTML = userScore;
        result.innerHTML =  playerSelection+ " beats " + computerSelection + "! You WIN!"
    }

    function  lose(){
        console.log("lose");
    }

    function  draw(){
        console.log("draw");
    }


function computerPlay(){
    let options = ["Rock", "Paper", "Scissors"];
    let selction = Math.floor(Math.random()*3);
    return options[selction];
}


function playRound(playerSelection){
    const computerSelection = computerPlay();
  
        if(playerSelection == "Paper" && computerSelection == "Paper" || playerSelection == "Rock" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Scissors") {
            draw();
        } else if(playerSelection== "Paper" && computerSelection == "Rock" || playerSelection== "Scissors" && computerSelection == "Paper" || playerSelection== "Rock" && computerSelection == "Scissors"){
           win(playerSelection, computerSelection);
            // return("win");
        } else {
           lose();
            // return("loss");
        }
}

function game(){
   
    
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



