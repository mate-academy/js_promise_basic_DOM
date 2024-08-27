'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((message) => createNotification(message));
promise2.catch((error) => createNotification(error.message, true));

function createNotification(message, isError) {
  const notification = document.createElement('div');

  notification.className = 'message';
  notification.textContent = message;

  if (isError) {
    notification.classList.add('error-message');
  }

  body.append(notification);
}
