'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function success() {
  const successMessage = document.createElement('div');

  successMessage.className = 'message';
  successMessage.textContent = 'Promise was resolved!';
  document.body.appendChild(successMessage);
}

function error() {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'message error-message';
  errorMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
}

promise1.then(success).catch(error);
promise2.then(success).catch(error);
