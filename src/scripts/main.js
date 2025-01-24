'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    // resolve('logo clicked');

    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

promise1.then(() => {
  const messageEl = document.createElement('div');

  messageEl.textContent = 'Promise was resolved!';
  messageEl.classList.add('message');
  document.body.appendChild(messageEl);
});

promise2.catch(() => {
  const messageElRej = document.createElement('div');

  messageElRej.textContent = 'Promise was rejected!';
  messageElRej.classList.add('message', 'error-message');
  document.body.appendChild(messageElRej);
});
