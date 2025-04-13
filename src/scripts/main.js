'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise1
  .then(() => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';
    document.body.appendChild(message);
  })
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message', 'error-message');
    errorMessage.textContent = 'Promise was rejected!';
    document.body.appendChild(errorMessage);
  });

promise2
  .then(() => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';
    document.body.appendChild(message);
  })
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message', 'error-message');
    errorMessage.textContent = 'Promise was rejected!';
    document.body.appendChild(errorMessage);
  });
