'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Promise was rejected!'), 3000);
});

promise1
  .then((message) => {
    body.insertAdjacentHTML('beforeend', `
            <div class="message">${message}</div>
        `);
  })
  .catch(() => {});

promise2
  .then(() => {})
  .catch((error) => {
    body.insertAdjacentHTML('beforeend', `
            <div class="message error-message">${error}</div>
        `);
  });
