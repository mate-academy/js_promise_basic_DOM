'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(error);
  }, 3000);
});

const success = () => {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">Promise was resolved!</div>
  `);
};

const error = () => {
  body.insertAdjacentHTML('beforeend', `
    <div class="error-message">Promise was rejected!</div>
  `);
};

promise1
  .then(success)
  .catch(error);

promise2
  .then(success)
  .catch(error);
