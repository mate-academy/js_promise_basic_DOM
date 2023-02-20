'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

function createMessage(text, className) {
  const message = document.createElement('div');

  message.classList.add(className);
  message.innerText = text;

  body.append(message);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
});

promise1
  .then(() => {
    createMessage('Promise was resolved!', 'message');
  });

promise2
  .catch(() => {
    createMessage('Promise was rejected!', 'error-message');
  });
