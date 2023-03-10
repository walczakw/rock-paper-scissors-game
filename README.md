# Rock Paper Scissors Game


## Introduction

The “Rock Paper Scissors Game” is a simple, web browser game.
It allows users to play with a computer.

The game is fully responsive and can be played on different screen sizes.

[View the live project here](https://walczakw.github.io/rock-paper-scissors-game/)

![Responsive Mockup](https://github.com/walczakw/rock-paper-scissors-game/blob/main/docs/readme-images/responsive-mockup.png)



## Index

1. [**Introduction**](#introduction)
2. [**Features**](#features)
    * [***Existing Features***](#existing-features)
    * [***Features Left to Implement and Possible Improvements***](#features-left-to-implement-and-possible-improvements)
3. [**Testing**](#testing)
    * [***Testing Responsiveness***](#testing-responsiveness)
    * [***Validator Testing***](#validator-testing)
4. [**Deployment**](#deployment)
5. [**Credits**](#credits)
    * [***Content***](#content)
    * [***Media***](#media)
    * [***General Reference***](#general-reference)



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

### Validator Testing
The following validator tools were used:
- HTML:
  - No errors were returned when passing through the official [W3 validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fwalczakw.github.io%2Frock-paper-scissors-game%2F)
- CSS:
  - No errors were found when passing through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fwalczakw.github.io%2Frock-paper-scissors-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- Accessibility:
  - No errors were found when passing through the official [WAVE validator](https://wave.webaim.org/report#/https://walczakw.github.io/rock-paper-scissors-game/)
- JavaScript:
  - No errors were found when passing through the official [JSHint validator](https://jshint.com/)
- Performance:
  - The performance was tested using 'Lighthouse validator' in Google Chrome Dev Tools in 'Incognito' mode.
 
![Lighthouse validator](https://github.com/walczakw/rock-paper-scissors-game/blob/main/docs/readme-images/lighthouse-validator.png)



## Deployment

The site was deployed to GitHub Pages by following the steps below:
  1. In the GitHub repository, navigate to the Settings tab and then click on 'Pages' (from the menu on the left)
  2. From the 'Branch' section drop-down menu (under 'Build and deployment') select the 'master' branch' and click 'Save'
  3. Once the site has been deployed, the link to it will be displayed at the top of the page (GitHub Pages section) with the information: "Your site is live at..."

The live link can be found here - https://walczakw.github.io/rock-paper-scissors-game/

Alternatively, a local copy of this repository can be made by pasting the code below into a terminal:
  - `git clone https://github.com/walczakw/rock-paper-scissors-game.git`



## Credits 

### Content 
- The website mockup for the README was generated using [techsini.com](https://techsini.com/multi-mockup/)
- The fonts used were imported from [Google Fonts](https://fonts.google.com/)

### Media
- The images used were taken from the open source site [pngimg.com](https://pngimg.com/)
- Images were compressed using [TinyPNG](https://tinypng.com/)

### General Reference
- During development process the following resources were used for reference when additional information was needed:
  - HTML, CSS and JavaScript advice:
    - [MDN](https://developer.mozilla.org/en-US/)
    - [w3schools](https://www.w3schools.com/)
  - Font size guidelines:
    - [learnui.design](https://learnui.design/blog/mobile-desktop-website-font-size-guidelines.html)
- The following videos were watched for an inspiration on different ways to tackle 'rock, paper, scissors' game:
  - Ania Kubow - "3 ways to code Rock Paper Scissors in JavaScript" [video](https://www.youtube.com/watch?v=RwFeg0cEZvQ)
  - Web Dev Simplified - "How To Code Rock Paper Scissors In JavaScript" [video](https://www.youtube.com/watch?v=1yS-JV4fWqY)
  

