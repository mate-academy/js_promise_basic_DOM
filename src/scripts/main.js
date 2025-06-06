'use strict';

const logo = document.querySelector('.logo');

function getSuccessMessage(message) {
  const successMessage = document.createElement('div');

  successMessage.className = 'message';
  successMessage.textContent = message;
  document.body.append(successMessage);
}

function getErrorMessage(err) {
  const errorMessage = document.createElement('div');

  errorMessage.className = 'message error-message';
  errorMessage.textContent = err;
  document.body.append(errorMessage);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

Promise.race([promise1, promise2])
  .then((result) => {
    getSuccessMessage(result);
  })
  .catch((error) => {
    getErrorMessage(error);
  });
