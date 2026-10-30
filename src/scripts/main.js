'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise1.then(() => {
  const success = document.createElement('div');

  success.classList.add('message');
  success.textContent = 'Promise was resolved!';

  document.body.append(success);
});

promise1.catch(() => {
  const error = document.createElement('div');

  error.classList.add('message', 'error-message');
  error.textContent = 'Promise was rejected!';

  document.body.append(error);
});

promise2.then(() => {
  const success = document.createElement('div');

  success.classList.add('message');
  success.textContent = 'Promise was resolved!';

  document.body.append(success);
});

promise2.catch(() => {
  const error = document.createElement('div');

  error.classList.add('message', 'error-message');
  error.textContent = 'Promise was rejected!';

  document.body.append(error);
});
