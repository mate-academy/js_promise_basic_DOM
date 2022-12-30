'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

function complete() {
  logo.insertAdjacentHTML('beforeend',
    `<div class="message">Promise was resolved!</div>`);
};

function cancel() {
  logo.insertAdjacentHTML('beforeend',
    `<div class="message error-message">Promise was rejected!</div>`);
};

promise1
  .then(complete)
  .catch(cancel);

promise2
  .then(complete)
  .catch(cancel);
