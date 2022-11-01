'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1
  .then(() => {
    document.body.insertAdjacentHTML('afterbegin', `
      <div class="message">
        <p>"Promise was resolved!"</p>
      </div>
    `);
  });

promise2
  .catch(() => {
    document.body.insertAdjacentHTML('afterbegin', `
      <div class="error-message">
        <p>"Promise was rejected!"</p>
      </div>
    `);
  });
