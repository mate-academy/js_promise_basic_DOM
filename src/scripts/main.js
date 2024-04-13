'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Reject after 3 second')), 3000);
});

promise1.then(() => {
  createMessage('message', null, 'Promise was resolved!');
});

promise1.catch(() => {
  createMessage('message', 'error-message', 'Promise was rejected!');
});

promise2.then(() => {
  createMessage('message', null, 'Promise was resolved!');
});

promise2.catch(() => {
  createMessage('message', 'error-message', 'Promise was rejected!');
});

function createMessage(className, additionalClassName, messageText) {
  const message = document.createElement('div');

  message.classList.add(className);

  if (additionalClassName) {
    message.classList.add(additionalClassName);
  }
  message.textContent = messageText;

  body.append(message);
}
