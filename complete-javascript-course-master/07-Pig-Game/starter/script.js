'use strict';

//Selecting elements
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.getElementById('score--1');
const diceElem = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Declare variables
let scores, currentScore, activePlayer, playing;

//Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceElem.classList.add('hidden');
  for (let i = 0; i <= 1; i++) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    document.querySelector(`.player--${i}`).classList.remove('player--active');
    document.querySelector(`#score--${i}`).textContent = 0;
    document.querySelector(`#current--${i}`).textContent = 0;
  }
  document.querySelector(`.player--0`).classList.add('player--active');
};

init();

const switchingPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1. Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceElem.src = `dice-${dice}.png`;
    diceElem.classList.remove('hidden');

    // 3. Check for rolled 1:
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchingPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceElem.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchingPlayer();
    }
  }
});

btnNew.addEventListener('click', () => {
  init();
});
