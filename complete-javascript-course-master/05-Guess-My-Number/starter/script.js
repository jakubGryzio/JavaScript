'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};

const updateStyle = function (background, width) {
  document.querySelector('body').style.backgroundColor = background;
  document.querySelector('.number').style.width = width;
};

const highScoreLogic = function (score) {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
};

const checkGreatness = function (how) {
  if (score > 1) {
    displayMessage(`Too ${how}!`);
    score--;
    setScore(score);
  } else {
    setScore(0);
    displayMessage('You lost the game!');
  }
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number! 🛑');
  } else if (guess !== secretNumber) {
    guess > secretNumber ? checkGreatness('high') : checkGreatness('low');
  } else {
    setNumber(secretNumber);
    updateStyle('#60b347', '30rem');
    displayMessage('Correct Number! 🎉');
    highScoreLogic(score);
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  setScore(20);
  setNumber('?');
  displayMessage('Start guessing...');
  setGuess('');
  updateStyle('#222', '15rem');
});
