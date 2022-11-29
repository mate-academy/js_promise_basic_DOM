'use strict';

const root = document.body;
const logo = document.querySelector('.logo');
const successBlock = '<div class="message">Promise was resolved!</div>';
const errorBlock = `
  <div class="message error-message">
    Promise was rejected!
  </div>`;

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1
  .then(() => {
    root.insertAdjacentHTML('beforeend', successBlock);
  });

promise2
  .catch(() => {
    root.insertAdjacentHTML('beforeend', errorBlock);
  });
