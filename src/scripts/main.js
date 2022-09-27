'use strict';

const root = document.querySelector('body');
const logo = document.querySelector('.logo');
const success = `<div class="message">Promise was resolved!</div>`;
const error = `<div class="message error-message">Promise was rejected!</div>`;

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    if (!success) {
      reject(error);
    } else {
      resolve(success);
    }
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(error);
  }, 3000);
});

promise1
  .then(result => root.insertAdjacentHTML('beforeend', result))
  .catch(err => root.insertAdjacentHTML('beforeend', err));

promise2
  .catch(err => root.insertAdjacentHTML('beforeend', err));