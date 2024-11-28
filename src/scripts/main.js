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

const promiseHelper = (message) => {
  const messageDiv = document.createElement('div');

  if (message === 'Promise was resolved!') {
    messageDiv.className = 'message';
    messageDiv.textContent = message;
  } else {
    messageDiv.className = 'message error-message';
    messageDiv.textContent = message.message;
  }

  document.body.append(messageDiv);
};

promise1.then(promiseHelper).catch(promiseHelper);
promise2.then(promiseHelper).catch(promiseHelper);
