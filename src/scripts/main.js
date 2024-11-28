'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

function handleMessage(message, className) {
  const messageDiv = document.createElement('div');

  messageDiv.className = className;
  messageDiv.textContent = message;
  body.appendChild(messageDiv);
}

promise1.then(() => {
  handleMessage('Promise was resolved!', 'message');
});

promise2.catch(() => {
  handleMessage('Promise was rejected!', 'message error-message');
});
