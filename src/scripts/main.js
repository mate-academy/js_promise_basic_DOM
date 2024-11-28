'use strict';

function handleSuccess(messageText) {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = messageText;
  document.body.appendChild(div);
}

function handleError(errorText) {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = errorText;
  document.body.appendChild(div);
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
