'use strict';

const logo = document.querySelector('.logo');
const root = document.body;

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected'));
  }, 3000);
});

promise1
  .then(() => {
    root.insertAdjacentHTML('beforeend', `
    <div class="message">Promise was resolved!</div>
  `);
  });

promise2
  .catch(() => {
    root.insertAdjacentHTML('beforeend', `
    <div class="message error-message">Promise was rejected!</div>
  `);
  });
