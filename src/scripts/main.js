'use strict';

const logo = document.querySelector('.logo');
const success = document.createElement('div');
const error = document.createElement('div');

success.classList.add('message');
error.classList.add('message', 'error-message');

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

promise1.then((message) => {
  success.innerText = message;
  document.body.append(success);
});

promise2.catch((message) => {
  error.innerText = message;
  document.body.append(error);
});
