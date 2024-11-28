'use strict';

// write your code here
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

function result(message, error) {
  const resultMessage = document.createElement('div');

  if (message) {
    resultMessage.classList.add('message');
    resultMessage.textContent = message;
  } else {
    resultMessage.classList.add('message', 'error-message');
    resultMessage.textContent = error.message;
  }
  body.appendChild(resultMessage);
}

promise1
  .then((message) => result(message, null))
  .catch((error) => result(null, error));

promise2
  .then((message) => result(message, null))
  .catch((error) => result(null, error));
