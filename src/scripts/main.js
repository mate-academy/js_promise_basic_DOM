'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="message">Promise was resolved!</div>
    `);
  })
  .catch(() => {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="message error-message">Promise was rejected!</div>
    `);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected'));
  }, 3000);
});

promise2
  .then(() => {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="message">Promise was resolved!</div>
    `);
  })
  .catch(() => {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="message error-message">Promise was rejected!</div>
  `);
  });
