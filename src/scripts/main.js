'use strict';

// eslint-disable-next-line no-unused-vars
const logo = document.querySelector('.logo');

const promise1 = new Promise(function (resolve, reject) {
  logo.addEventListener('click', function () {
    resolve();
  });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

// promise1 — УСПЕХ
promise1.then(function () {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(messageDiv);
});

// promise1 — ОШИБКА
promise1.catch(function () {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'message error-message';
  errorDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(errorDiv);
});

// promise2 — УСПЕХ
promise2.then(function () {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(messageDiv);
});

// promise2 — ОШИБКА
promise2.catch(function () {
  const errorMessageDiv = document.createElement('div');

  errorMessageDiv.className = 'message error-message';
  errorMessageDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(errorMessageDiv);
});
