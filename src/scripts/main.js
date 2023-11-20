'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise was rejected!');
  }, 3000);
});

promise1
  .then((message) => {
    appendMessage(message);
  })
  .catch((error) => {
    appendErrorMessage(error);
  });

promise2
  .then((message) => {
    throw new Error();
  })
  .catch((error) => {
    appendErrorMessage(error);
  });

function appendMessage(message) {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
}

function appendErrorMessage(error) {
  const errorMessageDiv = document.createElement('div');

  errorMessageDiv.className = 'message error-message';
  errorMessageDiv.textContent = error;
  document.body.appendChild(errorMessageDiv);
}
