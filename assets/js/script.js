// 1.
// User presses a button - need click/touch event
// (event listeners or a function that takes an event parameter)

// 2.
// Computer picks a random number between 1 and 3 - Math.random?

// 3.
// Assign random numer to a button (rock, paper or scissors)

// 4.
// If the user picks "paper" and computer picks "rock" - user wins - function for winGame?
//      display message: "You win! You picked paper, computer picked rock"
//     -> increment user-score
//
// else if the user picks "rock" and computer picks "scissors" - user wins - function for winGame?
//      display message: "You win! You picked rock, computer picked scissors"
//     -> increment user-score
//
// else if the user picks "scissors" and computer picks "paper" - user wins - function for winGame?
//      display message: "You win! You picked scissors, computer picked paper"
//     -> increment user-score
//
//  else if the user picks "X" and computer picks "X" - it's a draw - function for tieGame?
//      display message: "It's a draw! You picked X, computer picked X"
//  
//  else - computer wins - function for loseGame?
//      display message: "You lose! You picked ..., computer picked ..."
//     -> increment computer-score

//5. 
// If (computer-score or user-score = 5) stop the game and display message "You Won!" or "Computer Won!"

// 6. 
// Button to restart the game?



// Waiting for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function() {

    // Getting elements
    let buttonRock = document.getElementById("btn-rock");
    let buttonPaper = document.getElementById("btn-paper");
    let buttonScissors = document.getElementById("btn-scissors");
    let choices = ["Rock", "Paper", "Scissors"];

    let gameResultMessage = document.getElementById("game-result-message");
    let userChoiceMessage = document.getElementById("user-choice-message");
    let computerChoiceMessage = document.getElementById("computer-choice-message");

    // Event listeners to call out a function "buttonClicked()"
    buttonRock.addEventListener('click', function() {
        console.log("user: " + choices[0])
        userChoiceMessage.innerHTML = "Your move: " + choices[0];
        buttonClicked();
     });
    buttonPaper.addEventListener('click', function() {
        console.log("user: " + choices[1])
        userChoiceMessage.innerHTML = "Your move: " + choices[1];
        buttonClicked();
     });
    buttonScissors.addEventListener('click', function() {
        console.log("user: " + choices[2])
        userChoiceMessage.innerHTML = "Your move: " + choices[2];
        buttonClicked();
     });

    
     function buttonClicked() {

        computerMove();


     }


     function computerMove() {

        let randomNumber = Math.floor(Math.random() * 3);
        console.log("random number: " + randomNumber);
        
        let computerChoice = randomNumber;

        if (randomNumber == 0) {
            computerChoice = choices[0];
            console.log("computer choice: " + computerChoice);
        }
        else if (randomNumber == 1) {
            computerChoice = choices[1];
            console.log("computer choice: " + computerChoice);
        }
        else {
            computerChoice = choices[2];
            console.log("computer choice: " + computerChoice);
        }
        
        computerChoiceMessage.innerHTML = "Computer move: " + computerChoice;
     }




});

