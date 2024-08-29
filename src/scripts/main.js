'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', (e) => {
    resolve('Promise was resolved');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function createMessageDiv(message, type = 'success') {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');

  if (type !== 'success') {
    messageDiv.classList.add('error-message');
  }

  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
}

function handleSuccess() {
  const message = 'Promise was resolved!';

  createMessageDiv(message);
}

function handleError() {
  const message = 'Promise was rejected!';

  createMessageDiv(message, 'error');
}

promise1.then(handleSuccess);
promise2.catch(handleError);
