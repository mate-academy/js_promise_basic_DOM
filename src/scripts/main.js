'use strict';

const logo = document.getElementsByClassName('logo')[0];

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((success) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = success;
  document.body.appendChild(div);
});

promise2.catch((error) => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = error;
  document.body.appendChild(div);
});
