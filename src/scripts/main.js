'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

// eslint-disable-next-line prefer-promise-reject-errors
const promise2 = Promise.reject();

const successHandler = () => {
  const div = document.createElement('div');

  body.append(div);
  div.classList.add('message');
  div.innerText = 'Promise was resolved!';
};

const errorHandler = () => {
  const div = document.createElement('div');

  body.append(div);
  div.classList.add('message', 'error-message');
  div.innerText = 'Promise was rejected!';
};

promise1
  .then(successHandler);

promise2
  .catch(setTimeout(() => {
    errorHandler();
  }, 3000));
