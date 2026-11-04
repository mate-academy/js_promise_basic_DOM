'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
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
  .catch(() => {
    const errorMessageDiv = document.createElement('div');

    errorMessageDiv.className = 'message error-message';

    errorMessageDiv.textContent = 'Promise was rejected!';
    document.body.appendChild(errorMessageDiv);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2
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
