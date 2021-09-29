'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 13;
*/

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

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
    }
});

