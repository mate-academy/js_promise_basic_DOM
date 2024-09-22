'use strict';

// write your code here
const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

function handleSuccess() {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';

  document.body.appendChild(message);
}

function handleError() {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = 'Promise was rejected!';

  document.body.appendChild(message);
}

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
