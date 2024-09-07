'use strict';

const logo = document.querySelector('.logo');
const message = document.createElement('div');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  message.className = 'message';
  message.innerText = 'Promise was resolved!';
  document.body.appendChild(message);
});

promise2.catch((error) => {
  message.className = 'message error-message';
  message.innerText = error.message;
  document.body.appendChild(message);
});
