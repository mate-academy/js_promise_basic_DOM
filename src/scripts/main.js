'use strict';

const logo = document.querySelector('.logo');

const message = document.createElement('div');
message.classList.add('message');
message.textContent = 'Promise was resolved!';

const error = document.createElement('div');
error.classList.add('message', 'error-message');
error.textContent = 'Promise was rejected!';

let resolvePromise1;
const promise1 = new Promise((resolve) => {
  resolvePromise1 = resolve;
});

promise1
  .then(() => {
    document.body.appendChild(message);
  })
  .catch(() => {
  });

logo.addEventListener('click', () => {
  resolvePromise1();
});

const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

promise2
  .then(() => {
  })
  .catch(() => {
    document.body.appendChild(error);
  });
