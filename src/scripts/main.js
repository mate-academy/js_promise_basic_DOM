'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const resolver = (resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });

  setTimeout(() => {
    reject();
  }, 3000);
};

const promise1 = new Promise(resolver);
const promise2 = new Promise(resolver);

promise1.then(() => {
  body.insertAdjacentHTML('beforeend',
    '<div class="message">Promise was resolved!</div>');
});

promise2.catch(() => {
  body.insertAdjacentHTML('beforeend',
    '<div class="error-message">Promise was rejected!</div>');
});
