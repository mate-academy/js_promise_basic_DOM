'use strict';

const logo = document.querySelector('.logo');

new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });

  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
})
  .then(() => {
    const success = document.createElement('div');

    success.classList.add('message');
    success.textContent = 'Promise was resolved!';
    document.body.appendChild(success);
  })
  .catch(() => {
    const error = document.createElement('div');

    error.classList.add('message', 'error-message');
    error.textContent = 'Promise was rejected!';
    document.body.appendChild(error);
  });
