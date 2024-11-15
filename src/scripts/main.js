'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

promise1
  .then(() => {
    const successMessage = document.createElement('div');

    successMessage.classList.add('message');
    successMessage.textContent = 'Promise was resolved!';
    document.body.appendChild(successMessage);
  })
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message', 'error-message');
    errorMessage.textContent = 'Promise was rejected!';
    document.body.appendChild(errorMessage);
  });

// Обробник для promise2
promise2
  .then(() => {
    const successMessage = document.createElement('div');

    successMessage.classList.add('message');
    successMessage.textContent = 'Promise was resolved!';
    document.body.appendChild(successMessage);
  })
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message', 'error-message');
    errorMessage.textContent = 'Promise was rejected!';
    document.body.appendChild(errorMessage);
  });
