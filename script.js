
// computerGuess variable needs to be declared outside of a function
// this is so we can access it outside the function to compare it (scope).
var computerGuess;
var attempts = 0;
var userGuessLog = [];
// add when changing difficulty
var maxGuesses = 10;

// function called when game over, hides difficulty buttons and displays new game button
function gameEnded() {
  document.getElementById('newGameButton').style.display = 'inline';
  document.getElementById('easyBtn').style.display = 'none';
  document.getElementById('hardBtn').style.display = 'none';
  // add readonly attribute to input box. stopt user input when game over.
  document.getElementById('inputBox').setAttribute('readonly', 'readonly'); // (attr name, attr value)
}

function easyMode() {
  maxGuesses = 10;
  document.getElementById('easyBtn').className = 'activeButton';
  document.getElementById('hardBtn').className = '';
}

function hardMode() {
  maxGuesses = 5;
  document.getElementById('hardBtn').className = 'activeButton';
  document.getElementById('easyBtn').className = '';
}

function init() {
  // random creater number 0 (inclusive) > 1 (excluding)
  computerGuess = Math.floor((Math.random() * 100) + 1);
  document.getElementById('newGameButton').style.display = 'none';
}

// reload page when new game button is pressed
function newGame() {
  window.location.reload();
}

function compareGuess() {
  var userGuess = " " + document.getElementById('inputBox').value;

  // push each guess to an array.
  userGuessLog.push(userGuess);

  // display array values as previous guesses
  document.getElementById('guessLog').innerHTML = userGuessLog;

  // every guess increment attempts counter
  attempts++;
  document.getElementById('attempts').innerHTML = attempts;

  if (userGuessLog.length < maxGuesses) {

    if (userGuess > computerGuess) {
      document.getElementById('textOutput').innerHTML = 'Your guess is too high';
      // empty input field after guess
      document.getElementById('inputBox').value = "";
    } else if (userGuess < computerGuess) {
      document.getElementById('textOutput').innerHTML = 'Your guess is too low';
      // empty input field after guess
      document.getElementById('inputBox').value = "";
    } else {
      document.getElementById('textOutput').innerHTML = 'Correct! you got it in ' + attempts + ' attempts';
      document.getElementById('container').style.backgroundColor = "green";
      gameEnded();
    }
  } else { // else userGuessLog.length === maxGuesses

    if (userGuess > computerGuess) {
      document.getElementById('textOutput').innerHTML = 'YOU LOSE!,' + '<br> the number was ' + computerGuess;
      document.getElementById("container").style.backgroundColor = "#e82c4e";
      gameEnded();
    } else if (userGuess < computerGuess) {
      document.getElementById('textOutput').innerHTML = 'YOU LOSE!,' + '<br> the number was ' + computerGuess;
      document.getElementById("container").style.backgroundColor = "#e82c4e";
      gameEnded();
    } else {
      document.getElementById('textOutput').innerHTML = 'Correct! you got it in ' + attempts + ' attempts';
      document.getElementById("container").style.backgroundColor = "green";
      gameEnded();
    }
  }
}
