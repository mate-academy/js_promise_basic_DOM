'use strict';

const logo = document.querySelector('.logo');
const success = document.createElement('div');
const error = document.createElement('div');

success.setAttribute('class', 'message');
error.setAttribute('class', 'message error-message');
success.innerText = 'Promise was resolved!';
error.innerText = 'Promise was rejected!';

logo.addEventListener('click', () => {
  new Promise((resolve) => {
    resolve();
  }).then(() => {
    document.body.appendChild(success);
  });
});

window.addEventListener('load', () => {
  // eslint-disable-next-line promise/param-names
  new Promise((_, reject) => {
    setTimeout(() => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject();
    }, 3000);
  }).catch(() => {
    document.body.appendChild(error);
  });
});
