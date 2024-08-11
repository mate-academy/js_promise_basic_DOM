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

promise1.then((respMessage) => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = respMessage;
  document.body.appendChild(message);
});

promise2.catch((errMessage) => {
  const rejectMessage = document.createElement('div');

  rejectMessage.className = 'message error-message';
  rejectMessage.textContent = errMessage;
  document.body.appendChild(rejectMessage);
});
