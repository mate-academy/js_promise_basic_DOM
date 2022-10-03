'use strict';

const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(() => {
    body.insertAdjacentHTML('afterbegin', `
      <div class="message">
        Promise was resolved!
      </div>
    `);
  });

promise2
  .catch(() => {
    body.insertAdjacentHTML('afterbegin', `
      <div class="error-message">
        Promise was rejected!
      </div>
    `);
  });
