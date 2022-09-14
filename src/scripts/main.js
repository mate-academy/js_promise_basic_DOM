'use strict';

const logo = document.querySelector('.logo');
const root = document.querySelector('body');

const promise1 = new Promise((resolve) =>
  logo.addEventListener('click', () => resolve())
);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

const successPhrase = `<div class='message'>Promise was resolved! </div>`;

promise1
  .then(() => {
    root.insertAdjacentHTML('beforeend', successPhrase);
  })
  .catch(err => alert(err));

const errorPhrase = `<div class="message error-message">`
  + `Promise was rejected!</div>`;

promise2
  .catch(() => {
    root.insertAdjacentHTML('beforeend', errorPhrase);
  });
