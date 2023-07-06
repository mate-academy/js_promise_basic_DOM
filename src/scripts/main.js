'use strict';

const logo = document.querySelector('.logo');

function createMessage(message, isError = false) {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');

  if (isError) {
    messageDiv.classList.add('error-message');
  }

  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  createMessage('Promise was resolved!');
});

promise2.catch(() => {
  createMessage('Promise was rejected!', true);
});
