'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  const firstPromise = new Promise((resolve, reject) => {
    const isSuccess = true;

    const successMessage = document.createElement('div');

    successMessage.classList.add('message');
    successMessage.textContent = 'Promise was resolved!';

    if (isSuccess) {
      resolve(successMessage);
    }
  });

  firstPromise
    .then((successMessage) => {
      document.body.append(successMessage);
    })
    .catch(() => {});
});

const secondPromise = new Promise((resolve, reject) => {
  const isRejected = false;

  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message', 'error-message');
  errorMessage.textContent = 'Promise was rejected!';

  setTimeout(() => {
    if (!isRejected) {
      reject(errorMessage);
    }
  }, 3000);
});

secondPromise
  .then(() => {})
  .catch((errorMessage) => {
    document.body.append(errorMessage);
  });
