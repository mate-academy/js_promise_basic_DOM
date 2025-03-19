'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.textContent = 'Promise was resolved!';
    document.body.appendChild(messageDiv);
  })
  .catch((error) => {
    throw error;
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise 2 rejected after 3 seconds'));
  }, 3000);
});

promise2
  .then(() => {
    // Promise 2 resolved, which should not happen in this case
  })
  .catch(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message error-message';
    messageDiv.textContent = 'Promise was rejected!';
    document.body.appendChild(messageDiv);
  });
