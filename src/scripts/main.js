/* eslint-disable prefer-promise-reject-errors */
'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

const successHandler = () => {
  const container = document.createElement('div');

  container.classList.add('message');
  container.textContent = 'Promise was resolved!';
  document.body.append(container);
};

const errorHandler = () => {
  const container = document.createElement('div');

  container.classList.add('message', 'error-message');
  container.textContent = 'Promise was rejected!';
  document.body.append(container);
};

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
