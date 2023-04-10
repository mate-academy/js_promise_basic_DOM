'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = 'Promise was resolved!';
    body.append(div);

    resolve('succes');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const errorDiv = document.createElement('div');

    errorDiv.className = 'error-message';
    errorDiv.textContent = 'Promise was rejected!';
    body.append(errorDiv);

    reject(Error);
  }, 3000);
});

promise1
  .then();

promise2
  .catch();
