'use strict';

//Selecting elements
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.getElementById('score--1');
const diceElem = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add('hidden');

let currentScore1 = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', () => {
  // 1. Generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceElem.src = `dice-${dice}.png`;
  diceElem.classList.remove('hidden');

  // 3. Check for rolled 1:
  if (dice !== 1) {
    //Add dice to current score
    currentScore1 += dice;
  } else {
    //switch to next player
  }
});
