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

// Success handler
function handleSuccess() {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(messageDiv);
}

// Error handler
function handleError() {
  const errorDiv = document.createElement('div');

  errorDiv.classList.add('message');
  errorDiv.classList.add('error-message');
  errorDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(errorDiv);
}

promise1.then(handleSuccess);
promise2.catch(handleError);
