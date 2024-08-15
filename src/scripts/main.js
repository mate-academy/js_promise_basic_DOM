'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function handleSuccess() {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(messageDiv);
}

function handleError(error) {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'message error-message';
  errorDiv.textContent = error.message;
  document.body.appendChild(errorDiv);
}

promise1.then(handleSuccess);
promise2.catch(handleError);
