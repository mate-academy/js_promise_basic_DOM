'use strict';

function appendMessage(text, isError = false) {
  const messageDiv = document.createElement('div');

  messageDiv.className = isError ? 'message error-message' : 'message';
  messageDiv.textContent = text;
  document.body.appendChild(messageDiv);
}

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  if (logo) {
    logo.addEventListener(
      'click',
      () => {
        resolve('Promise was resolved!');
      },
      { once: true },
    );
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((message) => appendMessage(message, false))
  .catch((error) => appendMessage(error.message, true));

promise2
  .then((message) => appendMessage(message, false))
  .catch((error) => appendMessage(error.message, true));
