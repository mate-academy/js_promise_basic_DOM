'use strict';

const body = document.body;
const logo = document.querySelector('.logo');
const successMessage = document.createElement('div');
const errorMessage = document.createElement('div');

successMessage.classList.add('message');
successMessage.textContent = 'Promise was resolved!';

errorMessage.classList.add('message', 'error-message');
errorMessage.textContent = 'Promise was rejected!';

function successHandler() {
  body.append(successMessage);
}

function errorHandler() {
  body.append(errorMessage);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
