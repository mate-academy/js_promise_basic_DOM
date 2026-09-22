'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function showSuccessMessage() {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';

  document.body.append(message);
}

function showErrorMessage() {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = 'Promise was rejected!';

  document.body.append(message);
}

promise1.then(showSuccessMessage, showErrorMessage);
promise2.then(showSuccessMessage, showErrorMessage);
