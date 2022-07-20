'use strict';
// DOM and DOM manipulation(methods and properties are part of API's)
// DOcument Object Model: structured representation of html documents.
// it allows js to access the html elements and styles to manipulate them.
// Document sits at the top and is a special object -> entry point to DOM
// Document > HTML > head & body > they have elements
// relationships are: parent, child, sibling
// every element is called node element

// console.log(document.querySelector('.message').textContent.toUpperCase());
// document.querySelector('.message').textContent = 'OOOhhhh lala 😊';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.floor(Math.random() * 20);
let score = 20;

let count = 0;
// event listener
document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  count++;
  document.querySelector('.check').textContent = count;

  if (!guess) {
    document.querySelector('.message').textContent = 'OOOhhhh no number 😊';
  } else if (guess == secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct number';
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Tooo High';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Tooo Low';
    score--;
    document.querySelector('.score').textContent = score;
  } else document.querySelector('.message').textContent = 'Guess a number';
});
