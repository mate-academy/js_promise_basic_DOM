/* eslint-disable prefer-promise-reject-errors */
'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

promise1.then(() => {
  const successMessage = document.createElement('div');

  successMessage.textContent = `Promise was resolved!`;
  successMessage.className = 'message';

  body.appendChild(successMessage);
});

promise2.catch(() => {
  const errorMessage = document.createElement('div');

  errorMessage.textContent = `Promise was rejected!`;
  errorMessage.className = 'message error-message';
  body.appendChild(errorMessage);
});
