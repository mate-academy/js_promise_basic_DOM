'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const message = document.createElement('div');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  body.appendChild(message);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.catch(() => {
  message.textContent = 'Promise was rejected!';
  message.classList.add('error-message');
  body.appendChild(message);
});
