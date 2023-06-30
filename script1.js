'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.gname').textContent);
document.querySelector('.number').textContent = 16;
document.querySelector('.guess').value = 12;
*/

let secretnumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretnumber);

let score = 20;
let highscore = 0;

const msg = function (message) {
  document.querySelector('.message').textContent = message;
};
//document.querySelector('.number').textContent = secretnumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    msg('⚠️ No Number');
  } else if (guess > 20) {
    msg('Please Guess Between 1-20');
    document.getElementById('msg').style.color = '#ff0000';
  }
  //NOTE GAME WIN CONDITION
  else if (guess === secretnumber) {
    msg('Correct Number ✔️');
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // HIGH SCORE
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < secretnumber ? 'Too Low📈' : 'Too  High 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      msg('You have lost the Game 🤧');
      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.number').textContent = '❌';
      document.querySelector('.score').textContent = 0;
    }
  } /*
  NOTE IF THE GUESS IS HIIGH 
  else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You Have lost the Game ';

      document.querySelector('.score').textContent = 0;
    }
    //NOTE IF THE GUESS IS LOW
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low 📉';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You Have lost the Game ';

      document.querySelector('.score').textContent = 0;
    }
  }
  */
});
//NOTE PLAY AGAIN BUTTON FEATURE
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.getElementById('msg').style.color = '#eee';
  msg('Start Guessing... ');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
