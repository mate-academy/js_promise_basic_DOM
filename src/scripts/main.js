'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((result) => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = result;

  document.body.append(message);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise2.catch((error) => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message', 'error-message');
  errorMessage.textContent = error;

  document.body.append(errorMessage);
});
