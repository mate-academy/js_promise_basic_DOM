'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('h1');

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

  body.appendChild(message);
}

function errorHandler() {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message');
  errorMessage.classList.add('error-message');

  errorMessage.textContent = 'Promise was rejected!';

  body.appendChild(errorMessage);
}

promise1.then(successHandler);
promise2.catch(errorHandler);
