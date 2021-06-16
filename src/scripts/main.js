'use strict';

const body = document.querySelector('body');

const logo = document.querySelector('.logo');

function resolvePromise() {
  return new Promise((resolve) => {
    logo.addEventListener('click', (e) => {
      resolve();
    });
  });
};

function rejectPromise() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
};

const resolvedPromise = resolvePromise();

const rejectedPromise = rejectPromise();

resolvedPromise
  .then(() => {
    body.insertAdjacentHTML('afterbegin',
      `<div class="message">
        <p>Promise was resolved!</p>
      </div>`);
  });

rejectedPromise
  .then(() => {
    body.insertAdjacentHTML('afterbegin',
      `<div class="error-message">
        <p>Promise was rejected!</p>
      </div>`);
  });
