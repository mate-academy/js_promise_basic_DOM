'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('1'));
  }, 3000);
});

promise1
  .then(() => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.innerText = 'Promise was resolved!';

    body.append(message);
  });

promise2
  .catch(() => {
    const message = document.createElement('div');

    message.classList.add('error-message');
    message.innerText = 'Promise was rejected!';

    body.append(message);
  });
