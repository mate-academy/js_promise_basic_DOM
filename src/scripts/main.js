'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error), 3000);
});

promise1.then(() => {
  const messageSuccess = document.createElement('div');

  messageSuccess.className = 'message';
  messageSuccess.textContent = 'Promise was resolved!';
  body.append(messageSuccess);
});

promise2.catch(() => {
  const messageError = document.createElement('div');

  messageError.classList.add('message', 'error-message');
  messageError.textContent = 'Promise was rejected!';
  body.append(messageError);
});
