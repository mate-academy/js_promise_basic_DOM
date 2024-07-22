'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

function createEl(message, className) {
  const successMessage = document.createElement('div');

  successMessage.setAttribute('class', className);
  successMessage.innerText = message;
  body.appendChild(successMessage);
}

promise1.then(() => {
  createEl('Promise was resolved!', 'message');
});

promise2.catch(() => {
  createEl('Promise was rejected!', 'message error-message');
});
