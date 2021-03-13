'use strict';

const logo = document.querySelector('.logo');

function printMessage(type, text, shouldDelete) {
  const message = document.createElement('div');

  message.classList.add(type);
  message.textContent = text;

  document.body.append(message);

  if (shouldDelete === true) {
    setTimeout(() => message.remove(), 5000);
  }
}

const promiseResolve = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promiseReject = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promiseResolve
  .then(() => {
    printMessage('message', 'Promise was resolved!');
  });

promiseReject
  .catch(() => {
    printMessage('error-message', 'Promise was rejected!', true);
  });
