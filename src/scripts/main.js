'use strict';

// Promise 1 and 2 created
const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

// Promise handlers with success and reject messages
const successHandler = () => {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(messageDiv);
};

const errorHandler = () => {
  const errorMessageDiv = document.createElement('div');

  errorMessageDiv.className = 'message error-message';
  errorMessageDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessageDiv);
};

// Attach handlers to promises
promise1
  .then(successHandler)
  .catch(errorHandler);

promise2
  .then(successHandler)
  .catch(errorHandler);
