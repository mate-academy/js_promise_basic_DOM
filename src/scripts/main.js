'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise(
  (resolve) => (logo.onclick = () => resolve('Promise was resolved!')),
);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise was rejected!')), 3000);
});

promise1.then((message) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = `${message}`;

  body.appendChild(div);
});

promise2.catch((error) => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = `${error}`;

  body.appendChild(div);
});
