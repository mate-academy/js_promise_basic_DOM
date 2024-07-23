'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(() => {
    const message = document.createElement('div');

    message.className = 'message';
    message.textContent = 'Promise was resolved!';
    body.appendChild(message);
  })
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.className = 'message error-message';
    errorMessage.textContent = 'Promise was rejected!';
    body.append(errorMessage);
  });

promise2
  .then(() => {
    const message = document.createElement('div');

    message.className = 'message';
    message.textContent = 'Promise was resolved!';
    body.appendChild(message);
  })
  .catch((error) => {
    const errorMessage = document.createElement('div');

    errorMessage.className = 'message error-message';
    errorMessage.textContent = error;
    body.append(errorMessage);
  });
