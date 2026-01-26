/* eslint-disable prefer-promise-reject-errors */
'use strict';

const logo = document.querySelector('.logo');

const Promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const Promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

function showMessage() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
}

function showErrorMessage() {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.textContent = 'Promise was rejected!';
  document.body.appendChild(message);
}

Promise1.then(showMessage).catch(showErrorMessage);
Promise2.then(showMessage).catch(showErrorMessage);
