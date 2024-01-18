/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable new-cap */
'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const successHandler = () => {
  const successDiv = document.createElement('div');

  successDiv.className = 'message';
  successDiv.textContent = 'Promise was resolved!';
  body.append(successDiv);
};

const errorHandler = () => {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'message error-message';
  errorDiv.textContent = 'Promise was rejected!';
  body.append(errorDiv);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
