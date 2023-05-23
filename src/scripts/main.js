'use strict';

const logo = document.querySelector('.logo');

function success() {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(messageDiv);
};

function error() {
  const errorMessageDiv = document.createElement('div');

  errorMessageDiv.className = 'message error-message';
  errorMessageDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessageDiv);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(success)
  .catch();

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error), 3000);
});

promise2
  .then()
  .catch(error);
