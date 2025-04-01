'use strict';

// Promise 1 - Resolving on click
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const handleSuccess = () => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
};

const handleError = () => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message', 'error-message');
  errorMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
};

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
