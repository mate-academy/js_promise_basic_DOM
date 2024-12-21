'use strict';

// write your code here
const logo = document.querySelector('.logo');

// Create promise2 immediately, so it starts rejecting after 2 seconds
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise was rejected!');
  }, 2000);
});

// Create promise1 which resolves on logo click
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((data) => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = data;
  document.body.append(message);
});

promise2.catch((data) => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('message', 'error-message');
  errorMessage.textContent = data;
  document.body.append(errorMessage);
});
