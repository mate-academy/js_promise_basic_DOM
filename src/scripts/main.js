'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(() => {
  const successMessage = document.createElement('div');

  successMessage.classList = 'message';
  successMessage.textContent = 'Promise was resolved!';
  document.body.appendChild(successMessage);
}).catch(() => {
  const errorMessage = document.createElement('div');

  errorMessage.classList = 'message';
  errorMessage.classList.add('error-message');
  errorMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
});

promise2.catch(() => {
  const errorMessage = document.createElement('div');

  errorMessage.classList = 'message';
  errorMessage.classList.add('error-message');
  errorMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessage);
});
