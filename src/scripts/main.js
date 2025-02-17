'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  const promise1 = new Promise((resolve) => {
    if (logo) {
      logo.addEventListener('click', () => resolve());
    }
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
  });

  const appendMessage = (text, isError = false) => {
    const messageDiv = document.createElement('div');

    messageDiv.classList.add('message');

    if (isError) {
      messageDiv.classList.add('error-message');
    }
    messageDiv.textContent = text;
    document.body.appendChild(messageDiv);
  };

  promise1.then(() => appendMessage('Promise was resolved!'));
  promise2.catch((error) => appendMessage(error.message, true));
});
