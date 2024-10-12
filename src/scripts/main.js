'use strict';

const successMessage = `<div class="message">Promise was resolved!</div>`;
const errorMessage = `<div class="message error-message">Promise was rejected!</div>`;

const successHandler = () => {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', successMessage);
};
const errorHandler = () => {
  const body = document.querySelector('body');

  body.insertAdjacentHTML('beforeend', errorMessage);
};

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  const timeoutId = setTimeout(() => {
    reject(new Error('No clicks registered'));
  }, 5000);

  logo.addEventListener('click', () => {
    clearTimeout(timeoutId);
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);

  logo.addEventListener('click', () => {
    resolve('Promise2 was resolved before timeout!');
  });
});

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
