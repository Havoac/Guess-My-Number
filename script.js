'use strict';

/* 

// Changing the element in the "message" class from 
document.querySelector('.message').textContent = 'Correct Number';

// Changing the element in the repective class
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 30;
// .value" is used b/c it's in the input field 
document.querySelector('.guess').value = 23; 

*/

let secret_number = Math.trunc(Math.random() * 20) + 1; //Trunc to remove the decimal, random function will create a random secret number between 0 and 1
let score = document.querySelector('.score').textContent;
let high_score = 0;

const display_message = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    display_message('No Number Entered !!');
  } else if (guess == secret_number) {
    display_message('Correct Number');

    document.querySelector('.number').textContent = secret_number;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > high_score) {
      high_score = score;
      document.querySelector('.highscore').textContent = high_score;
    }
  } else if (guess != secret_number) {
    if (score > 1) {
      display_message(guess > secret_number ? 'Too High!!' : 'Too Low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      display_message('You lost the game ');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  display_message('Guess My Number!');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
