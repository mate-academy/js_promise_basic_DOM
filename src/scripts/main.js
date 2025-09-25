'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  if (!logo) {
    return;
  }
  logo.addEventListener('click', () => resolve(), { once: true });
});

promise1.then(() => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise failed'));
  }, 3000);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
});
