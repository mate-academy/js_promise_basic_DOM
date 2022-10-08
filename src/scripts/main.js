'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

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

function showMessage(message, className) {
  body.insertAdjacentHTML('beforeend', `
    <div class="${className}">
      ${message}
    </div>
  `);
}

promise1
  .then(success => showMessage(success, 'message'))
  .catch(error => showMessage(error, 'error-message'));

promise2
  .then(success => showMessage(success, 'message'))
  .catch(error => showMessage(error, 'error-message'));
