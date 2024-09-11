'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const div = document.createElement('div');

body.append(div);

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((success) => {
  div.classList.add('message');
  div.textContent = success;
});

promise2.catch((error) => {
  div.classList.add('message', 'error-message');
  div.textContent = error;
});
