'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1
  .then(() => showMessage())
  .catch(() => showError());

promise2
  .then(() => showMessage())
  .catch(() => showError());

function showMessage() {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.append(message);
}

function showError() {
  const message = document.createElement('div');

  message.className = 'error-message';
  message.textContent = 'Promise was rejected!';
  document.body.append(message);
}
