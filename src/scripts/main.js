'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const successHandler = () => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  body.append(div);
};

const errorHandler = () => {
  const div = document.createElement('div');

  div.classList = 'message error-message';
  div.textContent = 'Promise was rejected!';
  body.append(div);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error!'));
  }, 3000);
});

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
