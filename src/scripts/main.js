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

function handleSuccess(message) {
  const successMessage = document.createElement('div');

  successMessage.classList.add('message');
  successMessage.textContent = message;
  body.appendChild(successMessage);
}

function handleError(error) {
  const errrorMessage = document.createElement('div');

  errrorMessage.classList.add('message', 'error-message');
  errrorMessage.textContent = error.message;
  body.appendChild(errrorMessage);
}

promise1
  .then((message) => handleSuccess(message))
  .catch((error) => handleError(error));

promise2
  .then((message) => handleSuccess(message))
  .catch((error) => handleError(error));
