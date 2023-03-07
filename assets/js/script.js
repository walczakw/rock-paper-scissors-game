// Waiting for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function() {


    // Getting elements and defining variables
    let buttonRock = document.getElementById("btn-rock");
    let buttonPaper = document.getElementById("btn-paper");
    let buttonScissors = document.getElementById("btn-scissors");
    let choices = ["Rock", "Paper", "Scissors"];

    let eachRoundResultMessage = document.getElementById("each-round-result-message");
    let userChoiceMessage = document.getElementById("user-choice-message");
    let computerChoiceMessage = document.getElementById("computer-choice-message");

    let userScore = 0;
    let computerScore = 0;


    // Event listeners to call out a function "buttonClicked()"
    buttonRock.addEventListener('click', function() {
        let userMove = choices[0];
        buttonClicked(userMove);
     });

    buttonPaper.addEventListener('click', function() {
        let userMove = choices[1];
        buttonClicked(userMove);
     });

    buttonScissors.addEventListener('click', function() {
        let userMove = choices[2];
        buttonClicked(userMove);
     });


    //  Function for displaying user choice and randomly select and display computer choice
    //  Also to display result (Win, Lost or Draw)
     function buttonClicked(userMove) {

        userChoiceMessage.innerHTML = "Your move:  " + userMove;

        let randomNumber = Math.floor(Math.random() * 3);        
        let computerChoice = randomNumber;

        computerMove(computerChoice);

        gameResult(userMove, computerChoice);
     }

     // Assining computer random number to one of the choices in an array
     function computerMove(computerChoice) {

        if (computerChoice == 0) {
            computerChoice = choices[0];
        }
        else if (computerChoice == 1) {
            computerChoice = choices[1];
        }
        else {
            computerChoice = choices[2];
        }
        
        computerChoiceMessage.innerHTML = "Computer move:  " + computerChoice;
     }

    // Setting rules for game results (Win, Lost or Draw) and incrementing scores
    function gameResult(userMove, computerChoice) {

        if (userMove == choices[1] && choices[computerChoice] == choices[0]) {
            eachRoundResultMessage.innerHTML = "You Win!";
            userScore++;
        }
        else if (userMove == choices[0] && choices[computerChoice] == choices[2]) {
            eachRoundResultMessage.innerHTML = "You Win!";
            userScore++;
        }
        else if (userMove == choices[2] && choices[computerChoice] == choices[1]) {
            eachRoundResultMessage.innerHTML = "You Win!";
            userScore++;
        }
        else if (userMove == choices[computerChoice]) {
            eachRoundResultMessage.innerHTML = "It's a Draw!";
        }
        else {
            eachRoundResultMessage.innerHTML = "You Lost!";
            computerScore++;
        }

        document.getElementById("user-score").innerText = userScore;
        document.getElementById("computer-score").innerText = computerScore;
     }
});

