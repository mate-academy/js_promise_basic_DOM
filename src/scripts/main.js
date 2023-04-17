'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

const showMessage = (success) => {
  const message = document.createElement('div');

  message.classList.add(success ? 'message' : 'error-message');
  message.textContent = `Promise was ${success ? 'resolved' : 'rejected'}!`;
  document.body.appendChild(message);
};

promise1.then(() => showMessage(true), () => showMessage(false));
promise2.then(() => showMessage(true), () => showMessage(false));
