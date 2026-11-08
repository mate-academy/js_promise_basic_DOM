'use strict';

// write your code here

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(() => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';

    body.append(message);
  })
  .catch(() => {
    const message = document.createElement('div');

    message.classList.add('message', 'error-message');
    message.textContent = 'Promise was rejected!';

    body.append(message);
  });

promise2
  .then(() => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';

    body.append(message);
  })
  .catch(() => {
    const message = document.createElement('div');

    message.classList.add('message', 'error-message');
    message.textContent = 'Promise was rejected!';

    body.append(message);
  });
