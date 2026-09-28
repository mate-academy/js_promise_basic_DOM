'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('resolved');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1.then(() => {
  const msg = document.createElement('div');

  msg.classList.add('message');
  msg.textContent = 'Promise was resolved!';
  document.body.appendChild(msg);
});

promise2.catch(() => {
  const msg = document.createElement('div');

  msg.classList.add('message', 'error-message');
  msg.textContent = 'Promise was rejected!';
  document.body.appendChild(msg);
});
