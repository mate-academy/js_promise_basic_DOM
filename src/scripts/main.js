/* eslint-disable prefer-promise-reject-errors */
'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

function successMessage() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.innerText = `Promise was resolved!`;

  document.body.appendChild(message);
}

function errorMessage() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.classList.add('error-message');
  message.innerText = `Promise was rejected!`;

  document.body.appendChild(message);
}

promise1.then(successMessage).catch(errorMessage);

promise2.then(successMessage).catch(errorMessage);
