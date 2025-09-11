'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const d1v = document.createElement('div');

  d1v.classList.add('message');
  d1v.textContent = 'Promise was resolved!';
  document.body.appendChild(d1v);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch(() => {
  const d1v2 = document.createElement('div');

  d1v2.classList.add('message', 'error-message');
  d1v2.textContent = 'Promise was rejected!';
  document.body.appendChild(d1v2);
});
