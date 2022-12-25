'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise was rejected!'));
  }, 3000);
});

function showNotification(text) {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = text;

  if (text instanceof Error) {
    message.classList.add('error-message');
  }

  document.body.append(message);
}

promise1
  .then(result => showNotification(result))
  .catch(error => showNotification(error));

promise2
  .then(result => showNotification(result))
  .catch(error => showNotification(error));
