'use strict';

const promise1 = new Promise((resolve) => {
  const button = document.querySelector('.logo');

  button.addEventListener('click', () => {
    resolve('promise1 resolved');
  });
});

promise1.then(() => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.append(message);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('promise2 rejected');
  }, 3000);
});

promise2.catch(() => {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = 'Promise was rejected!';
  document.body.append(message);
});
