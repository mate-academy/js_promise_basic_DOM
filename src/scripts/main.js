'use strict';

const logoElement = document.querySelector('.logo');
const bodyElement = document.querySelector('body');

const successElement = document.createElement('div');

successElement.classList.add('message');

const errorElement = document.createElement('div');

errorElement.classList.add('message', 'error-message');

const promise1 = new Promise((resolve) => {
  logoElement.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((message) => {
    successElement.innerText = message;
    bodyElement.appendChild(successElement);
  });

promise2
  .catch((error) => {
    errorElement.innerText = error;
    bodyElement.appendChild(errorElement);
  });
