"use strict";

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 100;
let highScore = 0;

const setMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    const guess = Number(document.querySelector(".guess").value);

    //When input have no value
    if (!guess) {
      setMessage("🚨 No number!");

      //When player wins
    } else if (guess === secretNumber) {
      document.querySelector(".number").textContent = secretNumber;
      setMessage("👏 Correct Number! ");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      //Update highscore

      if (score > highScore) {
        console.log(score, highScore);

        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
      //Guess is wrong
    } else if (guess !== secretNumber) {
      setMessage(guess > secretNumber ? "↗ Too high!" : "↘ Too low!");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      score--;
      setMessage("You lost the game !");
    }
  }
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When input have no value
  if (!guess) {
    setMessage("🚨 No number!");

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    setMessage("👏 Correct Number! ");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //Update highscore

    if (score > highScore) {
      console.log(score, highScore);

      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //Guess is wrong
  } else if (guess !== secretNumber) {
    setMessage(guess > secretNumber ? "↗ Too high!" : "↘ Too low!");

    score--;
    document.querySelector(".score").textContent = score;
  } else {
    score--;
    setMessage("You lost the game !");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 100;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  setMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
});

/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK �
*/
