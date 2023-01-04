'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

const successHandler = () => {
  const div = document.createElement('div');

  div.classList = 'message';
  div.textContent = 'Promise was resolved!';
  body.append(div);
};

const errorHandler = () => {
  const div = document.createElement('div');

  div.classList = 'error-message';
  div.textContent = 'Promise was rejected!';
  body.append(div);
};

promise1.then(successHandler, errorHandler);

promise2.then(successHandler, errorHandler);
