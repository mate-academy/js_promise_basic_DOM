'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const successMessage = () => {
  body.insertAdjacentHTML('beforeEnd', `
  <div class="message">Promise was resolved!</div>
`);
};

const errorMessage = () => {
  body.insertAdjacentHTML('beforeEnd', `
  <div class="error-message">Promise was rejected!</div>
`);
};

promise1.then(successMessage).catch(errorMessage);
promise2.then(successMessage).catch(errorMessage);
