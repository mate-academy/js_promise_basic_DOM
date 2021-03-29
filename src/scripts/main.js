'use strict';

const body = document.querySelector('body');
const button = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  button.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1
  .then(() => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';

    body.append(message);
  });

promise2
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Promise was rejected!';

    body.append(errorMessage);
  });
