'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

promise1.then(() => {
  createMessage('Promise was resolved!');
});

promise1.catch(() => {
  createMessage('Promise was rejected!', 'error-message');
});

promise2.catch(() => {
  createMessage('Promise was rejected!', 'error-message');
});

promise2.then(() => {
  createMessage('Promise was resolved!');
});

function createMessage(text, messageClass) {
  const message = document.createElement('div');

  message.classList.add('message');

  if (messageClass) {
    message.classList.add(messageClass);
  }
  message.textContent = text;
  document.body.append(message);
}
