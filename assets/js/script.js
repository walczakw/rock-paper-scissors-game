// Waiting for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function() {

    // Getting elements
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
        console.log("user: " + choices[0])

        let userMove = choices[0];
        buttonClicked(userMove);
     });
     
    buttonPaper.addEventListener('click', function() {
        console.log("user: " + choices[1])

        let userMove = choices[1];
        buttonClicked(userMove);
     });
    buttonScissors.addEventListener('click', function() {
        console.log("user: " + choices[2]);

        let userMove = choices[2];
        buttonClicked(userMove);
     });

    
     function buttonClicked(userMove) {

        userChoiceMessage.innerHTML = "Your move:  " + userMove;

        let randomNumber = Math.floor(Math.random() * 3);
        console.log("random number: " + randomNumber);
        
        let computerChoice = randomNumber;

        computerMove(computerChoice);

        gameResult(userMove, computerChoice);

     }


     function computerMove(computerChoice) {

        if (computerChoice == 0) {
            computerChoice = choices[0];
            console.log("computer choice: " + computerChoice);
        }
        else if (computerChoice == 1) {
            computerChoice = choices[1];
            console.log("computer choice: " + computerChoice);
        }
        else {
            computerChoice = choices[2];
            console.log("computer choice: " + computerChoice);
        }
        
        computerChoiceMessage.innerHTML = "Computer move:  " + computerChoice;

     }


    function gameResult(userMove, computerChoice) {

        if (userMove == choices[1] && choices[computerChoice] == choices[0]) {
            console.log("You Win!");
            eachRoundResultMessage.innerHTML = "You Win!";
            userScore++;
            console.log("user score: " + userScore);
            console.log("computer score: " + computerScore);
        }
        else if (userMove == choices[0] && choices[computerChoice] == choices[2]) {
            console.log("You Win!");
            eachRoundResultMessage.innerHTML = "You Win!";
            userScore++;
            console.log("user score: " + userScore);
            console.log("computer score: " + computerScore);
        }
        else if (userMove == choices[2] && choices[computerChoice] == choices[1]) {
            console.log("You Win!");
            eachRoundResultMessage.innerHTML = "You Win!";
            userScore++;
            console.log("user score: " + userScore);
            console.log("computer score: " + computerScore);
        }
        else if (userMove == choices[computerChoice]) {
            console.log("It's a Draw!");
            eachRoundResultMessage.innerHTML = "It's a Draw!";
            console.log("user score: " + userScore);
            console.log("computer score: " + computerScore);
        }
        else {
            console.log("You Lost");
            eachRoundResultMessage.innerHTML = "You Lost!";
            computerScore++;
            console.log("user score: " + userScore);
            console.log("computer score: " + computerScore);
        }

        document.getElementById("user-score").innerText = userScore;
        document.getElementById("computer-score").innerText = computerScore;
     }

});

