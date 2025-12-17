'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const successHandler = () => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  body.appendChild(message);
};

const errorHandler = () => {
  const error = document.createElement('div');

  error.classList.add('message', 'error-message');
  error.textContent = 'Promise was rejected!';
  body.appendChild(error);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(successHandler).catch(errorHandler);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.then(successHandler).catch(errorHandler);
