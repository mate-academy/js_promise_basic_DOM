/* eslint-disable prefer-promise-reject-errors */
'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(`Promise was rejected!`);
  }, 3000);
});

promise1.then((responseMessage) => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = responseMessage;
  document.body.appendChild(message);
});

promise2.catch((errorMessage) => {
  const rejectMessage = document.createElement('div');

  rejectMessage.className = 'message error-message';
  rejectMessage.textContent = errorMessage;
  document.body.appendChild(rejectMessage);
});
