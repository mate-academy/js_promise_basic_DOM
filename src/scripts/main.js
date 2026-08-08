'use strict';

const promise1 = new Promise((resolve) => {
  document.addEventListener('click', (e) => {
    if (e.target.closest('.logo')) {
      resolve();
    }
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
});

promise1
  .then(() => {
    const body = document.querySelector('body');
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    body.appendChild(div);
  })
  .catch(() => {});

promise2
  .then(() => {})
  .catch(() => {
    const body = document.querySelector('body');
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = 'Promise was rejected!';
    body.appendChild(div);
  });
