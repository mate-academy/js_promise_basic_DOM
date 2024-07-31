'use strict';

// write your code here
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function wait(delay, value) {
  /* eslint-disable promise/param-names */
  return new Promise((_, reject) => {
    setTimeout(() => reject(value), delay);
  });
}

const promise1 = new Promise((resolve, _) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = wait(3000, 'Promise was rejected!');

const errorMessage = document.createElement('div');
const successMessage = document.createElement('div');

successMessage.classList.add('message');

errorMessage.classList.add('message');
errorMessage.classList.add('error-message');

promise1.then((response) => {
  successMessage.textContent = response;
  body.append(successMessage);
});

promise2.catch((response) => {
  errorMessage.textContent = response;
  body.append(errorMessage);
});
