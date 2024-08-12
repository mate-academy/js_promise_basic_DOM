'use strict';

const logo = document.querySelector('.logo');

function createMessage(className, textContent) {
  const message = document.createElement('div');

  message.className = className;
  message.textContent = textContent;
  document.body.appendChild(message);
}

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
  createMessage('message', 'Promise was resolved!');
});

promise2.catch(() => {
  createMessage('message error-message', 'Promise was rejected!');
});
