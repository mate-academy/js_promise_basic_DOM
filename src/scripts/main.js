'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((data) => {
    showMessage(data);
  });

promise2
  .catch((data) => {
    showMessage(data.toString().slice(6), 'error-message');
  });

function showMessage(message, className = '') {
  const page = document.querySelector('body');

  page.insertAdjacentHTML('beforeend',
    `<div class='message ${className}'>${message}</div>`);
};
