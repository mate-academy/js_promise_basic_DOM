'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

const successHandler = () => {
  const successMessage = document.createElement('div');

  successMessage.classList.add('message');
  successMessage.innerHTML = 'Promise was resolved!';
  document.body.append(successMessage);
};

const errorHandler = () => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message', 'error-message');
  errorMessage.innerHTML = 'Promise was rejected!';
  document.body.append(errorMessage);
};

promise1.then(successHandler).catch(errorHandler);

promise2.then(successHandler).catch(errorHandler);
