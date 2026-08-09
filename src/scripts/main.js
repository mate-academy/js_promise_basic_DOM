'use strict';

const logo = document.querySelector('.logo');

function successHandler(value) {
  const successMessageNode = document.createElement('div');

  successMessageNode.className = 'message';
  successMessageNode.textContent = value;

  document.body.append(successMessageNode);
}

function errorHandler(value) {
  const errorMessageNode = document.createElement('div');

  errorMessageNode.className = 'message error-message';
  errorMessageNode.textContent = 'Promise was rejected!';

  document.body.append(errorMessageNode);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error), 3000);
});

promise1.then(successHandler);
promise2.catch(errorHandler);
