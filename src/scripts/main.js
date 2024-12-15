'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

logo.addEventListener('click', function () {
  const promise1 = new Promise((resolve) => {
    resolve();
  });

  promise1.then(() => {
    createMessage('Promise was resolved', 'message');
  });
});

const promise2 = new Promise((resolve, reject) => {
  reject(new Error('Error'));
});

promise2.catch(() => {
  setTimeout(() => {
    createMessage('Promise was rejected!', 'message error-message');
  }, 3000);
});

function createMessage(msgText, type) {
  const message = document.createElement('div');

  message.className = type;
  message.textContent = msgText;
  body.append(message);
}
