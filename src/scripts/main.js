'use strict';

const button = document.querySelector('.logo');
const body = document.body;

const promise1 = new Promise((resolve, reject) => {
  button.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise was rejected'));
  }, 3000);
});

promise1
  .then((result) => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.textContent = result;

    body.appendChild(messageDiv);

    return promise2;
  });

promise2
  .catch(() => {
    const errorMessageDiv = document.createElement('div');

    errorMessageDiv.classList.add('message', `error-message`);
    errorMessageDiv.textContent = 'Promise was rejected!';

    body.appendChild(errorMessageDiv);
  });
