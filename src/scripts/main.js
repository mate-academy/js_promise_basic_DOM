'use strict';

const logo = document.querySelector('.logo');
const message = document.createElement('div');

function showMessage(text, className) {
  message.classList.add(className);
  message.innerText = text;

  document.body.append(message);
}

const promiseResolve = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promiseResolve
  .then(() => {
    showMessage('Promise was resolved!', 'message');
  });

promiseReject
  .catch(() => {
    showMessage('Promise was rejected!', 'error-message');
  });
