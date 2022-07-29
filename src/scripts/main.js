'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve(`<div class="message">Promise was resolved!</div>`);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`<div class="error-message">Promise was rejected!</div>`));
  }, 3000);
});

promise1
  .then(result => {
    document.body.insertAdjacentHTML('afterbegin', result);
  });

promise2
  .catch(error => {
    document.body.insertAdjacentHTML('beforeend', error);
  });
