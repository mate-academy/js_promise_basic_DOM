'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', function () {
    resolve('Promise was resolved!');
  });
});

promise1
  .then(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.innerHTML = 'Promise was resolved!';
    document.body.appendChild(messageDiv);
  })
  .catch(() => {
    const errorDiv = document.createElement('div');

    errorDiv.className = 'message error-message';
    errorDiv.innerHTML = 'Promise was rejected!';
    document.body.appendChild(errorDiv);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error, 'Promise was rejected!'), 3000);
});

promise2
  .then(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.innerHTML = 'Promise was resolved!';
    document.body.appendChild(messageDiv);
  })
  .catch(() => {
    const errorDiv = document.createElement('div');

    errorDiv.className = 'message error-message';
    errorDiv.innerHTML = 'Promise was rejected!';
    document.body.appendChild(errorDiv);
  });
