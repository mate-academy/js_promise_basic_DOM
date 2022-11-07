'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

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
  const divSuccess = document.createElement('div');

  divSuccess.className = 'message';
  divSuccess.textContent = message;
  body.append(divSuccess);
}

function errorHandler(errorMessage) {
  const divError = document.createElement('div');

  divError.className = 'error-message';
  divError.textContent = errorMessage.message;
  body.append(divError);
}

promise1.then(successHandler);
promise2.catch(errorHandler);
