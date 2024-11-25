'use strict';

// write your code here
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was reject'));
  }, 3000);
});

function addNotification(message, isError = false) {
  const notification = document.createElement('div');

  notification.classList.add('message');

  if (isError) {
    notification.classList.add('error-message');
  }

  notification.textContent = message;
  document.body.appendChild(notification);
}

promise1
  .then((message) => addNotification(message))
  .catch((error) => addNotification(error, true));

promise2
  .then((message) => addNotification(message))
  .catch((error) => addNotification(error, true));
