'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const successMessage = document.createElement('div');

  successMessage.classList.add('message');
  successMessage.textContent = 'Promise was resolved!';
  body.append(successMessage);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('reject'));
  }, 3000);
});

promise2.catch(() => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = 'Promise was rejected!';
  body.append(errorMessage);
});
