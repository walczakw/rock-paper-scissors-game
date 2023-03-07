# Rock Paper Scissors Game


## Introduction

The “Rock Paper Scissors Game” is a simple, web browser game.
It allows users to play with a computer.

The game is fully responsive and can be played on different screen sizes.

[View the live project here](https://walczakw.github.io/rock-paper-scissors-game/)

![Responsive Mockup](https://github.com/walczakw/rock-paper-scissors-game/blob/main/docs/readme-images/responsive-mockup.png)

## Features 

### Existing Features

- __Header__

  - The header features the game name displayed in a two-colored bold font.
  - This allows the user to be instantly informed which game they are going to play.

![Header](https://github.com/walczakw/rock-paper-scissors-game/blob/main/docs/readme-images/header.png)

- __The main game area before user interaction__

  - The main game area features three clickable pictures - Rock, Paper and Scissors.
  - This section also includes a results area with a score section for user and computer.

![Main game area](https://github.com/walczakw/rock-paper-scissors-game/blob/main/docs/readme-images/game-area.png)

- __Results area after user interaction__

  - After the user clicks on one of three pictures the game starts and the results area will be displayed.
  - The results area will show the user a message informing them who won each round.
  - The message will also display what was the user and computer move (The computer move is generated randomly inside JavaScript code).
  - The score for the user and computer will be updated after each round.

![Results area](https://github.com/walczakw/rock-paper-scissors-game/blob/main/docs/readme-images/results-area.png)

- __The Footer__ 

  - The footer section includes the instructions on how to play the game.
  - This is valuable to users who don't know the rules of the game.

![Footer](https://github.com/walczakw/rock-paper-scissors-game/blob/main/docs/readme-images/footer.png)

### Features Left to Implement and Possible Improvements
- The game could end after the user or computer reaches a score of '5'. The game result could then be displayed as a pop up window together with a 'Play Again' button to restart the game.
- The code in the JavaScript file could benefit from some refactoring. For example, event listeners for each button could be added by looping over 'choices' array.



## Testing 

- The whole website was tested after finishing the development.
- The game was played to confirm that all features work as expected and correct scores are displayed.
- The following web browsers were used for testing:
  - Chrome (version 110.0.5481.178)
  - Firefox (version 110.0)
  - Edge (version 110.0.1587.63)

### Testing Responsiveness 
- The website was tested for responsiveness using Google Chrome Dev Tools and picking different screen widths and different mobile and tablet devices.
- The 'Rock Paper Scissors' game is fully responsive from the screen width 280px as a minimum (eg. Samsung Galaxy Fold).

