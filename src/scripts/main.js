'use strict';

// write your code here

const logo = document.querySelector('.logo');
const body = document.body;

const handleError = () => {
  const errorContainer = document.createElement('div');

  errorContainer.className = 'message error-message';
  errorContainer.textContent = 'Promise was rejected!';
  body.append(errorContainer);
};

const handleSuccess = () => {
  const successContainer = document.createElement('div');

  successContainer.className = 'message';
  successContainer.textContent = 'Promise was resolved!';
  body.append(successContainer);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Logo clicked!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  const timeout = 3000;

  setTimeout(() => {
    reject(new Error('Promise 2 rejected!'));
  }, timeout);
});

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
