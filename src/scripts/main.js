'use strict';

// write your code here
const button = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  button.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(() => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
});

promise2.catch(() => {
  const messageError = document.createElement('div');

  messageError.className = 'message error-message';
  messageError.textContent = 'Promise was rejected!';
  document.body.appendChild(messageError);
});
