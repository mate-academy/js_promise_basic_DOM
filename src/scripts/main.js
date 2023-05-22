'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('clik', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(errorMessage);
  }, 3000);
});

const errorMessage = () => {
  body.insertAdjacentHTML('afterbegin',
    '<div class="message error-message">Promise was rejected!</div>');
};

const success = () => {
  body.insertAdjacentHTML('afterbegin',
    '<div class="message">Promise was resolved!</div>');
};

promise1
  .then(success)
  .catch(errorMessage);

promise2
  .then(success)
  .catch(errorMessage);
