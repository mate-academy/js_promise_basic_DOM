'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

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

promise1
  .then((data) => {
    const successDiv = document.createElement('div');

    successDiv.classList.add('message');
    successDiv.innerText = data;
    body.appendChild(successDiv);
  })
  .catch((err) => {
    const errorDiv = document.createElement('div');

    errorDiv.classList.add('error-message');
    errorDiv.innerText = err;
    body.appendChild(errorDiv);
  });

promise2
  .then((data) => {
    const successDiv = document.createElement('div');

    successDiv.classList.add('message');
    successDiv.innerText = data;
    body.appendChild(successDiv);
  })
  .catch((err) => {
    const errorDiv = document.createElement('div');

    errorDiv.classList.add('error-message');
    errorDiv.innerText = err;
    body.appendChild(errorDiv);
  });
