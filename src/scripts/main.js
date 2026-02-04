'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

function successHandler() {
  const success = document.createElement('div');

  success.setAttribute('class', 'message');
  success.textContent = 'Promise was resolved!';
  body.append(success);
}

promise1
  .then(successHandler)
  .catch(errorHandler);


const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

function errorHandler() {
  const error = document.createElement('div');

  error.setAttribute('class', 'message');
  error.classList.add('error-message');
  error.textContent = 'Promise was rejected!';
  body.append(error);
}

promise2
  .then(successHandler)
  .catch(errorHandler);
