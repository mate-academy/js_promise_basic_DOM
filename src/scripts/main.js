'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');

  const promise1 = new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected'));
    }, 3000);
  });

  promise1
    .then(() => {
      const message = document.createElement('div');

      message.classList.add('message');
      message.textContent = 'Promise was resolved!';
      document.body.appendChild(message);
    })
    .catch(() => {
      const message = document.createElement('div');

      message.classList.add('message', 'error-message');
      message.textContent = 'Promise was rejected!';
      document.body.appendChild(message);
    });

  promise2
    .then(() => {
      const message = document.createElement('div');

      message.classList.add('message');
      message.textContent = 'Promise was resolved!';
      document.body.appendChild(message);
    })
    .catch(() => {
      const message = document.createElement('div');

      message.classList.add('message', 'error-message');
      message.textContent = 'Promise was rejected!';
      document.body.appendChild(message);
    });
});
