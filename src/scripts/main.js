'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function displayMessage(message, isError = false) {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message' + (isError ? ' error-message' : '');
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
}

function handleSuccess(message) {
  displayMessage(message);
}

function handleError(error) {
  displayMessage(error.message, true);
}

promise1.then(handleSuccess);
promise2.catch(handleError);
