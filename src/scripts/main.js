'use strict';

const logo = document.querySelector('.logo');
const body = document.body;
const successPhrase = '<div class="message">Promise was resolved!</div>';
const errorPhrase =
  '<div class="message error-message">Promise was rejected!</div>';

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve());
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Fatal error')), 3000);
});

promise1
  .then(() => {
    body.insertAdjacentHTML('beforeend', successPhrase);
  })
  .catch(() => {
    body.insertAdjacentHTML('beforeend', errorPhrase);
  });

promise2.catch(() => {
  body.insertAdjacentHTML('beforeend', errorPhrase);
});
