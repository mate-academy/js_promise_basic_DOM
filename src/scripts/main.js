'use strict';

// write your code here
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  resolve('Promise was resolved!');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

logo.addEventListener('click', () => {
  promise1.then((result) => {
    const success = document.createElement('div');

    success.className = 'message';
    success.textContent = result;
    body.append(success);
  });

  promise2.catch((result) => {
    const error = document.createElement('div');

    error.className = 'message error-message';
    error.textContent = result.message;
    body.append(error);
  });
});
