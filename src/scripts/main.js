'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected after 3 seconds'));
  }, 3000);
});

function handleSuccess() {
  const successMessage = document.createElement('div');

  successMessage.className = 'message';
  successMessage.textContent = 'Promise was resolved!';
  document.body.appendChild(successMessage);
}

function handleError() {
  const errorMessage = document.createElement('div');

  errorMessage.className = ('message', 'error-message');
  errorMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
}

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
