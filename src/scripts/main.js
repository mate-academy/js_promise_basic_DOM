/* eslint-disable prefer-promise-reject-errors */
'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

promise1.then(() => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.append(message);
});

promise2.catch(() => {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.textContent = 'Promise was rejected!';
  document.body.append(message);
});
