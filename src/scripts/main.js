'use strict';

const body = document.querySelector('body');
const div = document.createElement('div');
const logo = body.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    div.className = 'message';
    div.textContent = 'Promise was resolved!';
    body.append(div.cloneNode(true));
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error), 3000);
});

promise2
  .catch(() => {
    div.className = 'error-message';
    div.textContent = 'Promise was rejected!';
    body.append(div.cloneNode(true));
  });
