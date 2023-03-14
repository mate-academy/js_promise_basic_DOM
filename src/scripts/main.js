'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Success');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1
  .then(successHandler)
  .catch(errorHandler);

promise2
  .then(successHandler)
  .catch(errorHandler);

function successHandler() {
  const success = document.createElement('div');

  success.classList.add('message');
  success.textContent = 'Promise was resolved!';
  body.append(success);
};

function errorHandler() {
  const error = document.createElement('div');

  error.classList.add('error-message', 'message');
  error.textContent = 'Promise was rejected!';
  body.append(error);
};
