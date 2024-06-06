'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '😃 Correct Number';
// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 11;
// document.querySelector('.guess').value = 6;

// declare variables
let secretNumber = Number(1);
let guess = Number(1);
let score = Number(20);

//function declarations
function getRandomInt(min, max) {
  console.log('Random Num Gen Call');
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isCorrectGuess() {
  console.log('compare logic');
  if (secretNumber == guess) {
    console.log('Correct!');
    document.body.style.backgroundColor = 'green';
  } else {
    console.log('Incorrect');
    document.querySelector('.score').textContent--;
    if (document.querySelector('.score').textContent == 0) {
      console.log('Game Over');
      document.body.style.backgroundColor = 'red';
    }
  }
}

function resetGame() {
  console.log('Reset Game');
  document.body.style.backgroundColor = 'black';
  document.querySelector('.guess').value = 0;
  document.querySelector('.score').textContent = 20;
  return getRandomInt(1, 20);
}

//gen a rand num on doc load
document.addEventListener('DOMContentLoaded', function () {
  console.log('Document loaded');
  //secretNumber = getRandomInt(1, 20);
  document.querySelector('.guess').value = 0;
  console.log(secretNumber);
});

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  function checkGuess() {
    console.log('Checking Guess...');
    if (guess > 0 && guess < 21) {
      console.log('Range is correct');
      isCorrectGuess();
    } else {
      console.log('Incorrect Range');
    }
  }
  //some logic to ensure a number was entered
  if (!guess) {
    console.log(typeof guess);
    document.querySelector('.message').textContent = 'Enter a number!';
  } else {
    document.querySelector('.message').textContent = 'Good Guess!';
    checkGuess();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = resetGame();
  console.log(secretNumber);
});
