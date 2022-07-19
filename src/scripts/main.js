'use strict';

const body = document.querySelector('body');

function generateSuccessMessage(message) {
  const successMessage = document.createElement('div');

  successMessage.classList = 'message';
  successMessage.innerText = message;
  body.append(successMessage);
}

function generateErrorMessage(message) {
  const errorMessage = document.createElement('div');

  errorMessage.classList = 'error-message';
  errorMessage.innerText = message;
  body.append(errorMessage);
}

const promise1 = new Promise((resolve, reject) => {
  const logo = body.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  const errorText = 'Promise was rejected!';

  setTimeout(() => reject(errorText), 3000);
});

promise1
  .then(result => generateSuccessMessage(result))
  .catch(error => generateErrorMessage(error));

promise2
  .then(result => generateSuccessMessage(result))
  .catch(error => generateErrorMessage(error));
