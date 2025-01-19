'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected, 3 seconds limit'));
  }, 3000);
});

promise1
  .then(() => {
    const successDiv = document.createElement('div');

    successDiv.className = 'message';
    successDiv.textContent = 'Promise was resolved!';
    document.body.appendChild(successDiv);
  })
  .catch(() => {
    // nothing here
  });

promise2
  .then(() => {
    const successDiv = document.createElement('div');

    successDiv.className = 'message';
    successDiv.textContent = 'Promise was resolved!';
    document.body.appendChild(successDiv);
  })
  .catch(() => {
    const errorDiv = document.createElement('div');

    errorDiv.className = 'message error-message';
    errorDiv.textContent = 'Promise was rejected!';
    document.body.appendChild(errorDiv);
  });
