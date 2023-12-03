'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', function() {
  const promise1 = new Promise((resolve, reject) => {
    document.querySelector('.logo').addEventListener('click', () => {
      resolve('Promise 1 was resolved!');
    });
  });

  promise1.then(() => {
    appendMessage('Promise was resolved!', 'message');
  }).catch(() => {
    appendMessage('Promise was rejected!', 'error-message');
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected!'));
    }, 3000);
  });

  promise2.then(() => {

  }).catch((error) => {
    appendMessage(error.message, 'error-message');
  });

  function appendMessage(text, className) {
    const messageDiv = document.createElement('div');

    messageDiv.textContent = text;
    messageDiv.classList.add('message', className);
    document.body.appendChild(messageDiv);
  }
});
