'use strict';

const promise1 = new Promise(function(resolve, reject) {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', e => {
    if (!e.target.closest('.logo')) {
      return;
    }
    resolve();
  });
});

promise1
  .then(() => {
    const body = document.querySelector('body');

    body.insertAdjacentHTML('beforeend', `
      <div class="message">Promise was resolved!</div>
    `);
  });

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise2
  .catch(() => {
    const body = document.querySelector('body');

    body.insertAdjacentHTML('beforeend', `
      <div class="error-message">Promise was rejected!</div>
    `);
  });
