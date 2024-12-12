/* eslint-disable no-console */
'use strict';

const logoElement = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logoElement.addEventListener('click', () => {
    resolve('logo was clicked');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout after 3 seconds'));
  }, 3000);
});

function appendMessage(text, className) {
  const messageDiv = document.createElement('div');

  messageDiv.className = className;
  messageDiv.textContent = text;
  document.body.appendChild(messageDiv);
}

promise1
  .then((message) => {
    appendMessage('Promise was resolved!', 'message');
    console.log(message);
  })
  .catch((error) => {
    appendMessage('Promise was rejected!', 'message error-message');
    console.error(error);
  });

promise2
  .then((message) => {
    appendMessage('Promise was resolved!', 'message');
    console.log(message);
  })
  .catch((error) => {
    appendMessage('Promise was rejected!', 'message error-message');
    console.error(error);
  });
