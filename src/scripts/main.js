'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function createMessage(text, isError = false) {
  const message = document.createElement('div');

  message.classList.add('message');

  if (isError) {
    message.classList.add('error-message');
  }
  message.textContent = text;
  body.appendChild(message);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    createMessage('Promise was resolved!');
  })
  .catch(() => {
    createMessage('Promise was rejected!', true);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .then(() => {
    createMessage('Promise was resolved!');
  })
  .catch(() => {
    createMessage('Promise was rejected!', true);
  });
