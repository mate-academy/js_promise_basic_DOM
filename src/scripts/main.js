'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo')
    .addEventListener('click', () => {
      resolve();
    });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

const successHandler = () => {
  promise1
    .then(() => document.body.insertAdjacentHTML(
      'beforeend',
      `<div class="message">Promise was resolved!</div>`,
    ));
};

const errorHandler = () => {
  promise2
    .catch(() => document.body.insertAdjacentHTML(
      'beforeend',
      `<div class="error-message">Promise was rejected!</div>`,
    ));
};

const startApp = () => {
  successHandler();
  errorHandler();
};

startApp();
