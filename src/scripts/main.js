'use strict';

const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(() => {
    const messageDiv = document.createElement('div');

    messageDiv.classList.add('message');
    messageDiv.textContent = 'Promise was resolved!';
    body.appendChild(messageDiv);
  })
  .catch(() => {
    const errorDiv = document.createElement('div');

    errorDiv.classList.add('message', 'error-message');
    errorDiv.textContent = 'Promise was rejected!';
    body.appendChild(errorDiv);
  });

promise2
  .then(() => {
    const messageDiv = document.createElement('div');

    messageDiv.classList.add('message');
    messageDiv.textContent = 'Promise was resolved!';
    body.appendChild(messageDiv);
  })
  .catch(() => {
    const errorDiv = document.createElement('div');

    errorDiv.classList.add('message', 'error-message');
    errorDiv.textContent = 'Promise was rejected!';
    body.appendChild(errorDiv);
  });
