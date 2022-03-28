'use strict';

const logo = document.querySelector('.logo');

const promise = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise
  .then((response) => successHandler(response))
  .catch((error) => errorHandler(error.message));

promise2
  .then((response) => successHandler(response))
  .catch((error) => errorHandler(error.message));

function errorHandler(errorMessage) {
  const errorElement = document.createElement('div');

  errorElement.classList.add('message', 'error-message');
  errorElement.innerText = errorMessage;
  document.body.append(errorElement);
}

function successHandler(message) {
  const successElement = document.createElement('div');

  successElement.classList.add('message');
  successElement.innerText = message;
  document.body.append(successElement);
}
