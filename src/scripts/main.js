'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected after 3 seconds'));
  }, 3000);
});

promise1.then(() => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
});

promise2.catch(() => {
  const rejectMessage = document.createElement('div');

  rejectMessage.className = 'message error-message';
  rejectMessage.textContent = 'Promise was rejected!';
  document.body.appendChild(rejectMessage);
});
