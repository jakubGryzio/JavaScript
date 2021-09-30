'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
    const checkGreatness = function (how) {
        if (score > 1) {
            document.querySelector('.message').textContent = `Too ${how}!`;
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'You lost the game!';
        }
    }
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No number! 🛑';
    } else if (guess > secretNumber) {
        checkGreatness('high');
    } else if (guess < secretNumber) {
        checkGreatness('low');
    } else {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = 'Correct Number! 🎉';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;

    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})