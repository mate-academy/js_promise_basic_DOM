'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve());
});
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 3000));

promise1.then(() => {
  body.insertAdjacentHTML(
    'beforeend',
    `<div class="message">Promise was resolved!</div>`,
  );
});

promise2.catch(() => {
  body.insertAdjacentHTML(
    'beforeend',
    `<div class="message error-message">Promise was rejected!</div>`,
  );
});
