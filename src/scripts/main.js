'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

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
    successMessage.textContent = 'Promise was resolved!';
    document.body.appendChild(successMessage);
  })
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Promise was rejected!';
    document.body.appendChild(errorMessage);
  });

promise2
  .then((message) => {
    const successMessage = document.createElement('div');

    successMessage.classList.add('message');
    successMessage.textContent = 'Promise was resolved!';
    document.body.appendChild(successMessage);
  })
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Promise was rejected!';
    document.body.appendChild(errorMessage);
  });
