'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function createResolvePromise() {
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => resolve());
  };

  return new Promise(resolver);
};

function createRejectPromise() {
  return new Promise((resolve, reject) => setTimeout(reject, 3000));
};

createRejectPromise().catch(() => {
  body.insertAdjacentHTML('beforebegin',
    `<div class="error-message">
      Promise was rejected!
    </div>`);
});

createResolvePromise().then(() => {
  body.insertAdjacentHTML('beforebegin',
    `<div class="message">
      Promise was resolved!
    </div>`);
});
