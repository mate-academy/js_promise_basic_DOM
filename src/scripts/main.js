'use strict';

const body = document.querySelector('body');

const promise1 = new Promise(resolve => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', e => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('error')), 3000);
});

const successHandler = () => {
  const el = `<div class="message">Promise was resolved!</div>`;

  body.insertAdjacentHTML('beforeend', el);
};

const errorHandler = () => {
  const el = `<div class="message error-message">Promise was rejected!</div>`;

  body.insertAdjacentHTML('beforeend', el);
};

promise1.then(successHandler);
promise2.catch(errorHandler);
