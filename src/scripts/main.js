/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-console */
'use strict';

const successHandler = () => {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(messageDiv);
};

const errorHandler = () => {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message error-message';
  messageDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(messageDiv);
};

const promise1 = new Promise((resolve, reject) => {
  document
    .querySelector('.logo')
    .addEventListener('click', () => resolve('works'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('rejected');
  }, 3000);
});

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
