'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '😃 Correct Number';
// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 11;
// document.querySelector('.guess').value = 6;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🎮 Enter a number!';
  }
});
