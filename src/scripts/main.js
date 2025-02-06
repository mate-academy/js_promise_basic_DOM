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

function createMessage(text, isError = false) {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message' + (isError ? ' error-message' : '');
  messageDiv.textContent = text;
  document.body.appendChild(messageDiv);
}

promise1
  .then((message) => createMessage(message))
  .catch((error) => createMessage(error, true));

promise2
  .then((message) => createMessage(message))
  .catch((error) => createMessage(error, true));
