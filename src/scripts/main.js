'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

function createNotification(message, className) {
  return body.insertAdjacentHTML('afterbegin', `
  <div class=${className}>${message}</div>
`);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', e => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(result => createNotification(result, 'message'));

promise2
  .catch(result => createNotification(result, 'error-message'));
