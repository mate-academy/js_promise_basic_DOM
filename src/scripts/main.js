'use strict';
/* eslint-disable prefer-promise-reject-errors */

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  showMessage('Promise was resolved!', 'message');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

promise2.catch(() => {
  showMessage('Promise was rejected!', 'error-message');
});

function showMessage(text, className) {
  const message = document.createElement('div');

  message.classList.add('message', className);
  message.textContent = text;
  document.querySelector('body').appendChild(message);
}
