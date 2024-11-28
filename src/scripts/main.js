'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const successHandler = () => {
  const message = document.createElement('div');

  message.textContent = 'Promise was resolved!';
  message.classList.add('message');
  document.body.appendChild(message);
};

const errorHandler = () => {
  const errorMessage = document.createElement('div');

  errorMessage.textContent = 'Promise was rejected!';
  errorMessage.classList.add('message', 'error-message');
  document.body.appendChild(errorMessage);
};

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
