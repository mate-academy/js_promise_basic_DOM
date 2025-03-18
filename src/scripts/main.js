'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const successHandler = (message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;

  document.body.appendChild(div);
};

const errorHandler = (message) => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = message;

  document.body.appendChild(div);
};

// eslint-disable-next-line promise/param-names
const promise2 = new Promise((_, reject) => {
  // eslint-disable-next-line prefer-promise-reject-errors
  setTimeout(() => reject('Promise was rejected!'), 3000);
});

promise1.then(successHandler);
promise2.catch(errorHandler);
