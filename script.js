'use strict';
/*
console.log(document.querySelector('.message').textContent);
//document.querySelector is to get the class or id from the html file , and textContent is to read only the text in the class or id
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log((document.querySelector('.guess').value = 23));
//here we use the value because the actual value is undefined , we can also use textContent but value is better.
*/
/*



*/

/*

        The Functions

*/
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const styleBodyBackground = function (background) {
  document.querySelector('body').style.backgroundColor = background;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
/*




*/
let score = 20; // its also good to keep some data in our code and not everything on DOM.
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// first part (document.q) is to call the check class then the (addEventL.) is a methold that listens to the event and inside we put first the type of event which is 'click' cuz its a button , then a function to give us a value from that event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("That's the correct Number! 🥳 ");
    // displayNumber(secretNumber);
    styleBodyBackground('#60b347');
    // in css we write (background-color) in js its not allowed so we type (backgroundColor) and that applies to all other properties from css

    document.querySelector('.number').style.width = '30rem';
    // here we have to type the number in a string + the size unit

    // Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // if the number is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
  /*



  */
  // For refrence ********

  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high';

  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess is too high.
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low';

  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  styleBodyBackground('#222');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
