'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise ((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise ((resolve, reject) => {
  setTimeout(() => {
    reject(new Error ('Promise was rejected!'))
  }, 3000);
});

promise1
  .then(result => {
    const success = document.createElement('div');

    success.classList.add('message');
    success.innerText = result;

    body.appendChild(success);
  });

promise2
  .catch(bug => {
    const error = document.createElement('div');

    error.classList.add('error-message');
    error.innerText = bug;

    body.appendChild(error);
  });
