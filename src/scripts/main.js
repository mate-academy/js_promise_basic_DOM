'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((message) => {
  createDiv(message, 'message');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((err) => {
  createDiv(err.message, 'message error-message');
});

function createDiv(message, className) {
  const messageDiv = document.createElement('div');

  messageDiv.innerHTML = message;
  messageDiv.className = className;

  body.appendChild(messageDiv);
}
