'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  if (logo) {
    logo.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  }
});

function rejectAfterDelay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = new Error('Promise was rejected!');

      reject(error);
    }, ms);
  });
}

const promise2 = rejectAfterDelay(3000);

function addMessage(text, isError = false) {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');

  if (isError) {
    messageDiv.classList.add('error-message');
  }
  messageDiv.textContent = text;
  document.body.appendChild(messageDiv);
}

promise1.then((message) => addMessage(message));
promise2.catch((error) => addMessage(error, true));
