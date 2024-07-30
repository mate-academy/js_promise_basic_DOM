'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', function () {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

promise1.then(() => {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = 'Promise was resolved!';

  document.body.appendChild(messageDiv);
});

promise2.catch(() => {
  const errorMessageDiv = document.createElement('div');

  errorMessageDiv.className = 'message error-message';
  errorMessageDiv.textContent = 'Promise was rejected!';

  document.body.appendChild(errorMessageDiv);
});
