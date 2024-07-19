'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

function successMessage(message) {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;

  body.appendChild(div);
}

function errorMessage(eror) {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = eror.message;

  body.appendChild(div);
}

promise1.then(successMessage).catch(errorMessage);

promise2.then(successMessage).catch(errorMessage);
