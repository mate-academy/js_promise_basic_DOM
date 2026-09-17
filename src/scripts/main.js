'use strict';

// write your code here

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1
  .then((message) => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
  })
  .catch((error) => {
    const errorDiv = document.createElement('div');

    errorDiv.className = 'message error-message';
    errorDiv.textContent = error.message;
    document.body.appendChild(errorDiv);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .then((message) => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
  })
  .catch((error) => {
    const errorDiv = document.createElement('div');

    errorDiv.className = 'message error-message';
    errorDiv.textContent = error.message;
    document.body.appendChild(errorDiv);
  });
