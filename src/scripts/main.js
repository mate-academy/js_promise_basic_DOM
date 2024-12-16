'use strict';

function pushMessage(type) {
  const message = document.createElement('div');

  message.classList.add('message');

  if (type === 'error') {
    message.classList.add('error-message');
    message.textContent = 'Promise was rejected!';
  } else {
    message.textContent = 'Promise was resolved!';
  }

  document.body.appendChild(message);
}

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

promise1.then(() => pushMessage()).catch(() => pushMessage('error'));
promise2.then(() => pushMessage()).catch(() => pushMessage('error'));
