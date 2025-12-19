'use strict';

const promise1 = new Promise((resolve, reject) => {
  const btn = document.querySelector('.logo');

  btn.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

promise1
  .then(() => {
    const body = document.querySelector('body');
    const message = document.createElement('div');

    body.appendChild(message);

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';
  })
  .catch(() => {
    const body = document.querySelector('body');
    const message = document.createElement('div');

    body.appendChild(message);

    message.classList.add('message error-message');
    message.textContent = 'Promise was rejected!';
  });

promise2
  .then(() => {
    const body = document.querySelector('body');
    const message = document.createElement('div');

    body.appendChild(message);

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';
  })
  .catch(() => {
    const body = document.querySelector('body');
    const message = document.createElement('div');

    body.appendChild(message);

    message.classList.add('message');
    message.classList.add('error-message');
    message.textContent = 'Promise was rejected!';
  });
