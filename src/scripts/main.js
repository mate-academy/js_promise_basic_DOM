'use strict';

const logo = document.querySelector('.logo');

function createDiv(divClass, message) {
  const div = document.createElement('div');

  div.className = divClass;
  div.textContent = message;

  return div;
}

function successHandler(message) {
  const successDiv = createDiv('message', message);

  document.body.append(successDiv);
}

function errorHandler(message) {
  const errorDiv = createDiv('error-message', message);

  document.body.append(errorDiv);
}

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise(
  (resolve, reject) => setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000));

promise1.then(successHandler);

promise2.catch(errorHandler);
