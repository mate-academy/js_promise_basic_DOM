'use strict';

const logo = document.querySelector('.logo');

function createNotification(message, className) {
  const notification = document.createElement('div');

  notification.classList.add(...className);
  notification.textContent = message;
  document.body.append(notification);
}

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

promise1
  .then(result => createNotification(result, ['message']));

promise2
  .catch(error =>
    createNotification(error, ['message', 'error-message']));
