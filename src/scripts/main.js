'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const message = 'Promise was resolved!';
const errorMessage = 'Promise was rejected!';
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(message);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(errorMessage);
  }, 3000);
});

function showResult(text, isError = false) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }
  div.textContent = text;
  body.append(div);
}

promise1.then((msg) => showResult(msg)).catch((err) => showResult(err, true));

promise2.then((msg) => showResult(msg)).catch((err) => showResult(err, true));
