'use strict';

const promise1 = new Promise(resolve => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

const body = document.querySelector('body');

promise1
  .then(() => {
    body.insertAdjacentHTML('beforeend', `
      <div class="message">Promise was resolved!</div>
    `);
  })
  .catch(() => {
    body.insertAdjacentHTML('beforeend', `
      <div class="error-message">Promise was rejected!</div>
    `);
  });

promise2.catch(() => {
  body.insertAdjacentHTML('beforeend', `
    <div class="error-message">Promise was rejected!</div>
  `);
});
