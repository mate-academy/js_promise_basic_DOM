'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((result) => {
  const successMessage = document.createElement('div');

  successMessage.className = 'message';
  successMessage.textContent = result;
  document.body.append(successMessage);
});

promise1.catch((error) => {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'message error-message';
  errorMessage.textContent = error;
  document.body.append(errorMessage);
});

promise2.then((result) => {
  const successMessage = document.createElement('div');

  successMessage.className = 'message';
  successMessage.textContent = result;
  document.body.append(successMessage);
});

promise2.catch((error) => {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'message error-message';
  errorMessage.textContent = error;
  document.body.append(errorMessage);
});
