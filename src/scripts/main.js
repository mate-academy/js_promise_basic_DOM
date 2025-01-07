'use strict';

// write your code here
const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise1 Resolved');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise2 Rejected'));
  }, 3000);
});

function handleSuccess(message) {
  const successDiv = document.createElement('div');

  successDiv.className = 'message';
  successDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(successDiv);
}

function handleError(message) {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'message error-message';
  errorDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(errorDiv);
}

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
