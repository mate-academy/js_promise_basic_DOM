'use strict';

const body = document.querySelector('body');

const logo = document.querySelector('.logo');

function createPromise() {
  return new Promise((resolve, reject) => {
    logo.addEventListener('click', (e) => {
      resolve();
    });

    setTimeout(reject, 3000);
  });
};

const newPromise = createPromise();

newPromise
  .then(() => {
    body.insertAdjacentHTML('afterbegin',
      `<div class="message">
        <p>Promise was resolved!</p>
      </div>`);
  })
  .catch(() => {
    body.insertAdjacentHTML('afterbegin',
      `<div class="error-message">
        <p>Promise was rejected!</p>
      </div>`);
  });
