'use strict';

const appendMessage = (text, isError = false) => {
  const messageDiv = document.createElement('div');

  messageDiv.className = isError ? 'message error-message' : 'message';
  messageDiv.textContent = text;
  document.body.append(messageDiv);
};

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (!logo) {
    reject(new Error('Logo element not found'));

    return;
  }
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(() => appendMessage('Promise was resolved!'))
  .catch(() => appendMessage('Promise was rejected!', true));

promise2
  .then(() => appendMessage('Promise was resolved!'))
  .catch(() => appendMessage('Promise was rejected!', true));
