'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((text) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = text;

  document.body.appendChild(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise2.catch((error) => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = error.message;

  document.body.appendChild(div);
});
