'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  resolve('Promise was resolved!');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

logo.addEventListener('click', async () => {
  const response1 = await promise1;

  const messageEl = document.createElement('div');

  messageEl.classList.add('message');

  messageEl.textContent = response1;

  document.body.append(messageEl);
});

promise2.catch((err) => {
  const messageEl = document.createElement('div');

  messageEl.classList.add('message', 'error-message');

  messageEl.textContent = err.message;

  document.body.append(messageEl);
});
