'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const messageHandler = (message, isError = false) => {
  const messageBlock = document.createElement('div');
  messageBlock.className = isError ? 'message error-message' : 'message';
  messageBlock.textContent = message;
  document.body.appendChild(messageBlock);
};

promise1
  .then((message) => messageHandler(message))
  .catch((message) => messageHandler(message, true));
promise2
  .then((message) => messageHandler(message))
  .catch((message) => messageHandler(message, true));
