'use strict';

const successHandler = () => {
  const successMessage = document.createElement('div');

  successMessage.classList.add('message');
  successMessage.innerText = 'Promise was resolved!';

  const body = document.querySelector('body');

  return body.append(successMessage);
};

const errorHandler = () => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message', 'error-message');
  errorMessage.innerText = 'Promise was rejected!';

  const body = document.querySelector('body');

  return body.append(errorMessage);
};

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  // eslint-disable-next-line prefer-promise-reject-errors
  setTimeout(() => reject(), 3000);
});

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
