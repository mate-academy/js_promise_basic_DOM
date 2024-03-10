'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const successMessage = document.createElement('div');

  successMessage.className = 'message';
  successMessage.textContent = 'Promise was resolved';
  document.body.appendChild(successMessage);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch(() => {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'message error-message';
  errorMessage.textContent = 'Promise was rejected';
  document.body.appendChild(errorMessage);
});
