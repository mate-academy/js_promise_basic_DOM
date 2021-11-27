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
    resolve(notification('message', 'Promise was resolved!'));
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(notification('message error-message',
      'Promise was rejected!')));
  }, 3000);
});

promise1
  .then();

promise2
  .catch();
