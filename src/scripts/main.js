'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise war rejected!')), 3000);
});

function showSuccess() {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
}

function showError() {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = 'Promise was rejected!';
  document.body.appendChild(message);
}

promise1.then(showSuccess, showError);
promise2.then(showSuccess, showError);
