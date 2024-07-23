'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function createMessage(messageClass, messageText) {
  const message = document.createElement('div');

  message.className = messageClass;
  message.textContent = messageText;
  body.appendChild(message);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(() => {
    createMessage('message', 'Promise was resolved!');
  })
  .catch(() => {
    createMessage('message', 'Promise was rejected!');
  });

promise2
  .then(() => {
    createMessage('message', 'Promise was resolved!');
  })
  .catch((error) => {
    createMessage('message error-message', error.message);
  });
