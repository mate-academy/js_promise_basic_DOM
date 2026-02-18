'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => {
      resolve();
    });
  }
});

promise1.then(() => {
  const success = document.createElement('div');

  success.classList.add('message');
  success.textContent = 'Promise was resolved!';
  document.body.appendChild(success);
});

promise1.catch(() => {
  const error = document.createElement('div');

  error.classList.add('message', 'error-message');
  error.textContent = 'Promise was rejected!';
  document.body.appendChild(error);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
});

promise2.then(() => {
  const success = document.createElement('div');

  success.classList.add('message');
  success.textContent = 'Promise was resolved!';
  document.body.appendChild(success);
});

promise2.catch(() => {
  const error = document.createElement('div');

  error.classList.add('message', 'error-message');
  error.textContent = 'Promise was rejected!';
  document.body.appendChild(error);
});
