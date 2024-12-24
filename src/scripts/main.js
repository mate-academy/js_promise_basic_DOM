'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
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
    const successMessage = document.createElement('div');

    successMessage.classList.add('message');
    successMessage.textContent = message;
    document.body.append(successMessage);
  })
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Promise was rejected!';
    document.body.append(errorMessage);
  });

promise2
  .then((message) => {
    const successMessage = document.createElement('div');

    successMessage.classList.add('message');
    successMessage.textContent = message;
    document.body.append(successMessage);
  })
  .catch((error) => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message', 'error-message');
    errorMessage.textContent = error.message;
    document.body.append(errorMessage);
  });
