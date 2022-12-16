'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

promise1.then((message) => {
  const div = document.createElement('div');

  div.textContent = message;
  div.className = 'message';
  document.body.append(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise was rejected!')), 2000);
});

promise2.catch((error) => {
  const div = document.createElement('div');

  div.textContent = error;
  div.className = 'error-message';
  document.body.append(div);
});
