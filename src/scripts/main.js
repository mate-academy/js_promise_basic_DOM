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

function successHandler(message) {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;

  body.appendChild(div);
}

function errorHandler(err) {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = err.message;

  body.appendChild(div);
}

promise1.then(successHandler).catch(errorHandler);

promise2.then(successHandler).catch(errorHandler);
