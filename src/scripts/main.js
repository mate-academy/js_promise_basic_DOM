'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (!logo) {
    reject(new Error('Logo element not found!'));

    return;
  }

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((result) => {
    appendMessage(result);
  })
  .catch((error) => {
    appendMessage(error.message, true);
  });

promise2
  .then((result) => {
    appendMessage(result);
  })
  .catch((error) => {
    appendMessage(error.message, true);
  });

const appendMessage = (text, isError = false) => {
  const messageDiv = document.createElement('div');

  messageDiv.className = isError ? 'message error-message' : 'message';
  messageDiv.textContent = text;
  document.body.appendChild(messageDiv);
};
