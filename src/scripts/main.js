'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    body.insertAdjacentHTML('afterbegin', `
      <div class="error-message">
        Promise was rejected!
      </div>`);
  }, 3000);
});

promise1
  .then(() => {
    body.insertAdjacentHTML('afterbegin', `
      <div class="message">
        Promise was resolved!
      </div>`);
  });
