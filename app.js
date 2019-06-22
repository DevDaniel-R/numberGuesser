/*
GAME FUNCTION:
- PLAYER MUST GUESS A NUMBER BETWEEN A MIN AND MAX
-PLAYER GETS A CERTAIN AMOUNT OF GUESSES
-NOTIFY PLAYER OF GUESSES REMAINING
-NOTIFY PLAYER OF GUESSES REMAINING
-LET PLAYER CHOOSE TO PLAY AGAIN
*/

// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//ui elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // check if won
  if (guess === winningNum) {
    //Game over won
    gameOver(true, `${winningNum} is correct, You Win!`);
  } else {
    //wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over -lost

      gameOver(
        false,
        `Game over, You lost!, the correct number was ${winningNum}`
      );
    } else {
      //Game continues - answer wrong

      //change border color
      guessInput.style.borderColor = "red";

      //clear input
      guessInput.value = "";

      //tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

//Game Over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  //disable input
  guessInput.disable = true;
  //change border color
  guessInput.style.borderColor = color;
  //set text color
  message.style.color = color;
  //set message
  setMessage(msg);
}

//set message

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
