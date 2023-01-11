const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
//

const createDivsForChars = (word) => {
  const wordContainer = document.querySelector('#word-container');
  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  const letterButtonContainer = document.querySelector('#letter-buttons');
  for (const char of ALPHABET) {
    letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => document.querySelector(`div.${letter}`) !== null;

// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter) => {
  // when user guesses a correct letter, fills in the appropriate blanks with that letter
  const letterDivs = document.querySelectorAll(`.${letter}`)
};

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;
  // Replace this with your code
  const sharkImg = document.querySelector('img');

  // if numWrong is 5, disable all buttons and show the hidden a element
  if (numWrong === 1) {
    sharkImg.setAttribute('src', '/static/images/guess1.png');
  } else if (numWrong === 2) {
      sharkImg.setAttribute('src', '/static/images/guess2.png');
  } else if (numWrong === 3) {
      sharkImg.setAttribute('src', '/static/images/guess3.png');
  } else if (numWrong === 4) {
      sharkImg.setAttribute('src', '/static/images/guess4.png');
  } else if (numWrong === 5) {
      sharkImg.setAttribute('src', '/static/images/guess5.png');
      document.getElementById('play-again');
      disableLetterButton();
  }
};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  for (const button of document.querySelectorAll('button')) {
    // add an event handler to handle clicking on a letter button
    // YOUR CODE HERE
    button.addEventListener('click', () => {
  
      const letter = button.innerHTML;
      // check if currently clicked letter is in the word
      if (isLetterInWord(letter)){
        // if it is, call handleCorrectGuess
        handleCorrectGuess(letter);
      // if it is not, call handleWrongGuess
      } else {
        handleWrongGuess();
      }
  })
  }
  
  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
})();
