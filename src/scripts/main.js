'use strict';

const body = document.querySelector('body');

const logo = document.querySelector('.logo');

const resolvePromise = new Promise((resolve) => {
  logo.addEventListener('click', (e) => {
    resolve();
  });
});

resolvePromise
  .then(() => {
    body.insertAdjacentHTML('afterbegin',
      `<div class="message">
        <p>Promise was resolved!</p>
      </div>`);
  });

const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

rejectPromise
  .then()
  .catch(() => {
    body.insertAdjacentHTML('afterbegin',
      `<div class="error-message">
        <p>Promise was rejected!</p>
      </div>`);
  });
