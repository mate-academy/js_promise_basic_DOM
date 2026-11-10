'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function successHandler() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';

  document.body.append(message);
}

function errorHandler() {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.textContent = 'Promise was rejected!';

  document.body.append(message);
}

promise1.then(successHandler, errorHandler);
promise2.then(successHandler, errorHandler);
