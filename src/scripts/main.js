'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  const body = document.body;

  const appendMessage = (message, className) => {
    const messageElement = document.createElement('div');

    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    body.appendChild(messageElement);
  };

  const promise1 = new Promise((resolve) => {
    logo.addEventListener('click', resolve);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000);
  });

  promise1.then(() => appendMessage('Promise was resolved!', ''));
  promise2.catch(() => appendMessage('Promise was rejected!', 'error-message'));
});
