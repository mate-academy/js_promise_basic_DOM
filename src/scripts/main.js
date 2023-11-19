'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise 1 resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise 2 rejected!'));
  }, 3000);
});

promise1
  .then(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.textContent = 'Promise was resolved!';
    document.body.appendChild(messageDiv);
  })
  .catch(() => {
    const errorMessageDiv = document.createElement('div');

    errorMessageDiv.className = 'message error-message';
    errorMessageDiv.textContent = 'Promise was rejected!';
    document.body.appendChild(errorMessageDiv);
  });

promise2
  .then(() => {
  })
  .catch(() => {
    const errorMessageDiv = document.createElement('div');

    errorMessageDiv.className = 'message error-message';
    errorMessageDiv.textContent = 'Promise was rejected!';
    document.body.appendChild(errorMessageDiv);
  });
