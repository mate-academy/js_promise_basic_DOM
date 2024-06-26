'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';

    resolve(message);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message', 'error-message');
    errorMessage.textContent = 'Promise was rejected!';
    reject(errorMessage);
  }, 3000);
});

promise1.then((message) => {
  body.append(message);
});

promise2.catch((errorMessage) => {
  body.append(errorMessage);
});
