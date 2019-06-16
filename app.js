/*
GAME FUNCTION:
- PLAYER MUST GUESS A NUMBER BETWEEN A MIN AND MAX
-PLAYER GETS A CERTAIN AMOUNT OF GUESSES
-NOTIFY PLAYER OF GUESSES REMAINING
-LET PLAYER CHOOSE TO PLAY AGAIN
*/

// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//ui elements
const game = doccumentGetElementById('game'),
  minNum = querySelector('#game'),
  maxNum = querySelector('.min-num'),
  guessBtn = querySelector('.max-num'),
  guessInput = querySelector('#guess-btn'),
  message = querySelector('.message');

// Assign UI