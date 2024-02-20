'use strict';

const logo = document.querySelector('.logo');
const success = document.createElement('div');
const error = document.createElement('div');

success.classList.add('message');
success.innerText = 'Promise was resolved!';

error.classList.add('message', 'error-message');
error.innerText = 'Promise was rejected!';

const promiseResolved = () => document.body.append(success);
const promiseRejected = () => document.body.append(error);

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('error')), 3000);
});

promise1.then(promiseResolved);
promise2.catch(promiseRejected);
