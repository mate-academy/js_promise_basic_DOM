'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve());
});

promise1.then(() => {
  body.insertAdjacentHTML(
    'beforeend',
    `<div class="message">Promise was resolved!</div>`,
  );
});
