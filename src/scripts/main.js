'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const onSuccess = () => {
  body.insertAdjacentHTML('beforeend', `
  <div class="message">Promise was resolved!</div>
  `);
};

const onError = () => {
  body.insertAdjacentHTML('beforeend', `
  <div class="error-message">Promise was rejected!</div>
  `);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(onSuccess());
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(onError());
  }, 3000);
});

promise1.then(promise2);
