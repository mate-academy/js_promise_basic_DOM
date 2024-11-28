'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

new Promise((resolve) => {
  logo.addEventListener('click', () => resolve());
}).then(() => {
  body.insertAdjacentHTML(
    'beforeend',
    `<div class="message">Promise was resolved!</div>`,
  );
});

new Promise((resolve, reject) => setTimeout(reject, 3000)).catch(() => {
  body.insertAdjacentHTML(
    'beforeend',
    `<div class="message error-message">Promise was rejected!</div>`,
  );
});
