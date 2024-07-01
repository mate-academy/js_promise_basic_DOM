'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((_, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });
});

const successHandler = (message) => {
  const messageBlock = document.createElement('div');
  messageBlock.className = 'message';
  messageBlock.textContent = message;
  document.body.appendChild(messageBlock);
};

const errorHandler = (message) => {
  const errorBlock = document.createElement('div');
  errorBlock.className = 'message error-message';
  errorBlock.textContent = message;
  document.body.appendChild(errorBlock);
};

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
