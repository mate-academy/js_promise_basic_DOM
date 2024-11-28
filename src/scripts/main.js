'use strict';

const body = document.querySelector('body');

const successHandler = () => {
  body.insertAdjacentHTML('afterend',
    `<div class="message">Promise was resolved!</div>`);
};

const errorHandler = () => {
  body.insertAdjacentHTML('afterend',
    `<div class="message error-message">Promise was rejected!</div>`);
};

const promise1 = new Promise((resolve, reject) => {
  const button = document.querySelector('.logo');

  button.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(successHandler)
  .catch(errorHandler);

promise2
  .then(successHandler)
  .catch(errorHandler);
