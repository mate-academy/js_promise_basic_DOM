'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const resolveMessage = '<div class="message">Promise was resolved!</div>';
const rejectMessage = '<div class="error-message">Promise was rejected!</div>';

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(() => body.insertAdjacentHTML('beforeend', resolveMessage));

promise2
  .catch(() => body.insertAdjacentHTML('beforeend', rejectMessage));
