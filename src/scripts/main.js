'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

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
    const message = document.createElement('div');

    message.classList.add('message', 'error-message');
    message.textContent = 'Promise was rejected!';
    reject(message);
  }, 3000);
});

promise1.then((message) => body.append(message)).catch((e) => body.append(e));

promise2.then((message) => body.append(message)).catch((e) => body.append(e));
