'use strict';

const body = document.querySelector('body');

function resolvePromise() {
  return new Promise((resolve) => {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', (e) => {
      resolve(body.insertAdjacentHTML('afterbegin',
        `<div class="message">
          <p>Promise was resolved!</p>
        </div>`));
    });
  });
};

function rejectedPromise() {
  return new Promise((resolve, reject) => {
    const rejected = () => {
      body.insertAdjacentHTML('afterbegin',
        `<div class="error-message">
          <p>Promise was rejected!</p>
        </div>`);
    };

    setTimeout(rejected, 3000);
  });
};

resolvePromise();
rejectedPromise();
