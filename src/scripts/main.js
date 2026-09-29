'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    const successMessage = document.createElement('div');

    successMessage.classList.add('message');
    successMessage.textContent = 'Promise was resolved!';

    resolve(successMessage);
  });
});

promise1
  .then((successMessage) => {
    document.body.append(successMessage);
  })
  .catch(() => {});

const promise2 = new Promise((resolve, reject) => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message', 'error-message');
  errorMessage.textContent = 'Promise was rejected!';

  setTimeout(() => {
    reject(errorMessage);
  }, 3000);
});

promise2
  .then(() => {})
  .catch((errorMessage) => {
    document.body.append(errorMessage);
  });
