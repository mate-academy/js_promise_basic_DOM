/* eslint-disable prefer-promise-reject-errors */
'use strict';

const message = document.createElement('div');
const rejectMessage = document.createElement('div');
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

function successHandler() {
  message.textContent = 'Promise was resolved!';
  message.classList.add('message');
  document.body.appendChild(message);
}

function errorHandler() {
  rejectMessage.textContent = 'Promise was rejected!';
  rejectMessage.classList.add('message');
  rejectMessage.classList.add('error-message');
  document.body.appendChild(rejectMessage);
}

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
