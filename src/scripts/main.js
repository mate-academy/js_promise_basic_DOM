'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');
  messageDiv.textContent = 'Promise was resolved!';
  document.body.append(messageDiv);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout!'));
  }, 3000);
});

promise2.catch(() => {
  const errorDiv = document.createElement('div');

  errorDiv.classList.add('message', 'error-message');
  errorDiv.textContent = 'Promise was rejected!';
  document.body.append(errorDiv);
});
