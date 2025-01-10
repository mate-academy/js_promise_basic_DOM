'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const promise1 = new Promise((resolve, reject) => {
    document.querySelector('.logo').addEventListener('click', () => {
      resolve();
    });
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise was rejected after 3 seconds'));
    }, 3000);
  });

  promise1
    .then(() => {
      const successMessage = document.createElement('div');

      successMessage.className = 'message';
      successMessage.textContent = 'Promise was resolved!';

      document.body.appendChild(successMessage);
    })
    .catch(() => {});

  promise2
    .then(() => {})

    .catch(() => {
      const errorMessage = document.createElement('div');

      errorMessage.className = 'message error-message';
      errorMessage.textContent = 'Promise was rejected!';
      document.body.appendChild(errorMessage);
    });
});
