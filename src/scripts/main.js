'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

function success() {
  body.insertAdjacentHTML('afterbegin', `
    <div class="message">Promise was resolved!</div>
    `);
}

function error() {
  body.insertAdjacentHTML('afterbegin', `
  <div class="error-message">Promise was rejected!</div>
  `);
}

promise1.then(success, error);

promise2.then(success, error);
