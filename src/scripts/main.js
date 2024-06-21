'use strict';

function handleSuccess(messageText) {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = messageText;
  document.body.appendChild(message);
}

function handleError(errorText) {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.textContent = errorText;
  document.body.appendChild(message);
}

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  const promise1 = new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected'));
    }, 3000);
  });

  promise1
    .then(handleSuccess)
    .catch(() => handleError('Promise was rejected!'));

  promise2
    .then(handleSuccess)
    .catch(() => handleError('Promise was rejected!'));
});
