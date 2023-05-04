'use strict';

// write your code here
const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

const successHandler = () => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
};

const errorHandler = () => {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.textContent = 'Promise was rejected!';
  document.body.appendChild(message);
};

promise1.then(successHandler).catch(errorHandler);

promise2.then(successHandler).catch(errorHandler);
