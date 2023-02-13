'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1
  .then(() => {
    createMessage('message', 'Promise was resolved!');
  });

promise2
  .catch(() => {
    createMessage('message error-message', 'Promise was rejected!!');
  });

function createMessage(className, textMessage) {
  body.insertAdjacentHTML('beforeend',
    `<div class="${className}">${textMessage}</div>`);
}
