'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Reject after 3 second')), 3000);
});

promise1.then(() => {
  const successMessage = document.createElement('div');

  successMessage.classList.add('message');
  successMessage.textContent = 'Promise was resolved!';

  body.append(successMessage);
});

promise1.catch(() => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message', 'error-message');
  errorMessage.textContent = 'Promise was rejected!';

  body.append(errorMessage);
});

promise2.then(() => {
  const successMessage = document.createElement('div');

  successMessage.classList.add('message');

  body.append(successMessage);
});

promise2.catch(() => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message error-message');

  body.append(errorMessage);
});
