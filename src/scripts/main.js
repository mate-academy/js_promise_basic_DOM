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


promise1.then((response) => {
  const successMessage = document.createElement('div');
  successMessage.classList.add('message');
  
  successMessage.textContent = response;
  body.append(successMessage);
});

promise2.catch((response) => {
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('message');
  errorMessage.classList.add('error-message');
  
  errorMessage.textContent = response;
  body.append(errorMessage);
});
