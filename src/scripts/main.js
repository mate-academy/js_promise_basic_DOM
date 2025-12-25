'use strict';

// write your code here
const logo = document.querySelector('.logo');
const message = document.createElement('div');
const messageError = document.createElement('div');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((text) => {
  message.classList.add('message');
  message.textContent = text;
  document.body.appendChild(message);
});

promise2.catch((error) => {
  setTimeout(() => {
    messageError.classList.add('message', 'error-message');
    messageError.textContent = error.message;
    document.body.appendChild(messageError);
  }, 3000);
});
