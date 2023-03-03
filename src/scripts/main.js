'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

function renderMessage(className, message) {
  const messageElement = document.createElement('div');

  messageElement.className = className;
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
};

promise1.then(() => {
  renderMessage('message', 'Promise was resolved!');
}).catch(() => {
  renderMessage('error-message', 'Promise was rejected!');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2.then(() => {
  renderMessage('message', 'Promise was resolved!');
}).catch(() => {
  renderMessage('error-message', 'Promise was rejected!');
});
