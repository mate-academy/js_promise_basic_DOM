'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function createNotification(message, isError) {
  const notification = document.createElement('div');

  notification.className = 'message';
  notification.textContent = message;

  if (isError) {
    notification.classList.add('error-message');
  }

  body.append(notification);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  // eslint-disable-next-line prefer-promise-reject-errors
  setTimeout(() => reject('Promise was rejected!'), 3000);
});

promise1.then(
  (message) => createNotification(message),
  (message) => createNotification(message, true),
);
promise2.catch((message) => createNotification(message, true));
