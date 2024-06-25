'use strict';

const logo = document.querySelector('.logo');

function insertMessage(message, isError = false) {
  const messageDiv = document.createElement('div');

  messageDiv.textContent = message;
  messageDiv.className = 'message';

  if (isError) {
    messageDiv.classList.add('error-message');
  }

  document.body.appendChild(messageDiv);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

promise1.then(() => {
  insertMessage('Promise was resolved!');
});

promise2.catch(() => {
  insertMessage('Promise was rejected!', true);
});
