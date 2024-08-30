/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const message = document.createElement('div');

message.classList.add('message');

const handleSuccess = (msgText) => {
  const successMessage = message.cloneNode();

  successMessage.textContent = msgText;
  body.append(successMessage);
};

const handleError = (errorText) => {
  const errorMessage = message.cloneNode();

  errorMessage.classList.add('error-message');
  errorMessage.textContent = errorText;
  body.append(errorMessage);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
})
  .then(handleSuccess)
  .catch(handleError);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
})
  .then(handleSuccess)
  .catch(handleError);
