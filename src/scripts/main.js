'use strict';

const body = document.querySelector('body');
const button = document.querySelector('.logo');

function createPromise(nameOfClass, textOfMessage) {
  const message = document.createElement('div');

  message.className = nameOfClass;
  message.textContent = textOfMessage;

  body.append(message);
}

const promise1 = new Promise((resolve, reject) => {
  button.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1
  .then(() => {
    createPromise('message', 'Promise was resolved!');
  });

promise2
  .catch(() => {
    createPromise('error-message', 'Promise was rejected!');
  });
