'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function notification(newClass, text) {
  const message = document.createElement('div');

  message.className = `${newClass}`;
  message.innerText = `${text}`;

  body.append(message);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1
  .then(() => notification('message', 'Promise was resolved!'));

promise2
  .catch(() => notification('message error-message',
    'Promise was rejected!'));
