// VARIABLES //

//scores that are kept track of during the game//
let userScore = 0; //players score
let compScore = 0; //computers score

//HTML Variables//
const userScore_Span = document.getElementById("user-score"); // user score on scoreboard
const compScore_Span = document.getElementById("computer-score");// computer score on scoreboard
const rock_button = document.getElementById("rock-button"); //button for rock
const paper_button = document.getElementById("paper-button"); //button for paper
const scissors_button = document.getElementById("scissors-button"); //button for scissors
const result = document.querySelector(".result > p"); //div that holds the result text eg "rock beats paper"


//event listeners//

    //Buttons//

    //Each button has an event listener attched that when the button is clicked the correct response is passed on through a function
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

    //Each function here produces an outcome corresponding to its name
    function  win(playerSelection, computerSelection){ // Adds a single win point onto the usersScore and updates the scoreboard
        userScore++;
        userScore_Span.innerHTML = userScore;
        result.innerHTML =  playerSelection+ " beats " + computerSelection + "! You WIN!"
        resultCheck();
        
    }

    function  lose(playerSelection, computerSelection){ // Adds a single win point onto the compScore and updates the scoreboard
        compScore++;
        compScore_Span.innerHTML = compScore;
        result.innerHTML =  computerSelection+ " beats " + playerSelection + "! You LOSE!"
        resultCheck();
    }

    function  draw(playerSelection){ // no points added onto the scoreboard and message shown to let user know the result was a draw
        result.innerHTML =  "You both selected " + playerSelection + " so its a draw" 
        resultCheck();
    }

    //Computers choice function
function computerPlay(){
    let options = ["Rock", "Paper", "Scissors"];
    let selction = Math.floor(Math.random()*3);
    return options[selction];
}

    //players choice function
    //takes the user seelction from a button press then compares that selection
    //against all possible outcomes and calls the correct function based on that
function playRound(playerSelection){
    const computerSelection = computerPlay();
  
        if(playerSelection == "Paper" && computerSelection == "Paper" || playerSelection == "Rock" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Scissors") {
            draw(playerSelection);
        } else if(playerSelection== "Paper" && computerSelection == "Rock" || playerSelection== "Scissors" && computerSelection == "Paper" || playerSelection== "Rock" && computerSelection == "Scissors"){
           win(playerSelection, computerSelection);
        } else {
           lose(playerSelection, computerSelection);
        }
}

function resultCheck(){
    if(userScore > 4 ){
        result.innerHTML = "YOU WON THE GAME!"
    } else if (compScore > 4){
        result.innerHTML = "YOU LOST THE GAME :("
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



