'use strict';

const logo = document.querySelector('.logo');
const messageContainer = document.createElement('div');

messageContainer.className = 'message';
document.body.append(messageContainer);

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  // eslint-disable-next-line prefer-promise-reject-errors
  setTimeout(() => reject('Promise was rejected!'), 3000);
});

promise1.then(
  (message) => {
    messageContainer.textContent = message;
    messageContainer.classList.remove('error-message');
  },
  (message) => {
    messageContainer.textContent = message;
    messageContainer.classList.add('error-message');
  },
);

promise2.catch((message) => {
  messageContainer.textContent = message;
  messageContainer.classList.add('error-message');
});
