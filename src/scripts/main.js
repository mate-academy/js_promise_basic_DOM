'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

function promiseHandler(className, message) {
  const messageElement = document.createElement('div');

  messageElement.classList.add(className);
  messageElement.textContent = 'Promise was ' + message;
  document.body.append(messageElement);
}

promise1
  .then(() => promiseHandler('message', 'resolved'))
  .catch(() => promiseHandler('error-message', 'rejected'));

promise2
  .then(() => promiseHandler('message', 'resolved'))
  .catch(() => promiseHandler('error-message', 'rejected'));
