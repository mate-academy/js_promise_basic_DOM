'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (ev) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = 'Time is over';

    reject(error);
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
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message error-message';
    messageDiv.textContent = 'Promise was rejected!';
    document.body.appendChild(messageDiv);
  });

promise2
  .then(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.textContent = 'Promise was resolved!';
    document.body.appendChild(messageDiv);
  })
  .catch(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message error-message';
    messageDiv.textContent = 'Promise was rejected!';
    document.body.appendChild(messageDiv);
  });
