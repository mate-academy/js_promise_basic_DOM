'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

const createDiv = (message, ...classes) => {
  const div = document.createElement('div');

  div.classList.add(...classes);
  div.textContent = message;
  document.body.appendChild(div);
};

promise1
  .then((message) => createDiv(message, 'message'))
  .catch((error) => createDiv(error, 'message', 'error-message'));

promise2
  .then((message) => createDiv(message, 'message'))
  .catch((error) => createDiv(error, 'message', 'error-message'));
