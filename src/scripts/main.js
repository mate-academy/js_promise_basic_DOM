'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout error'));
  }, 3000);
});

promise1.then(() => successHandler()).catch(() => errorHandler());
promise2.then(() => successHandler()).catch(() => errorHandler());

function successHandler() {
  const success = document.createElement('div');

  success.classList.add('message');
  success.textContent = 'Promise was resolved!';
  document.body.append(success);
}

function errorHandler() {
  const error = document.createElement('div');

  error.classList.add('message', 'error-message');
  error.textContent = 'Promise was rejected!';
  document.body.append(error);
}
