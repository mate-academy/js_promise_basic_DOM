'use strict';

// write your code here
const body = document.querySelector('body');
const logo = body.querySelector('.logo');
const div = document.createElement('div');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise was rejected!');
  }, 3000);
});

promise1
  .then((result) => {
    body.appendChild(div);
    div.classList.add('message');
    div.textContent = result;
  })
  .catch(() => {});

promise2
  .then((result) => {})
  .catch((error) => {
    body.appendChild(div);
    div.classList.add('message', 'error-message');
    div.textContent = error;
  });
