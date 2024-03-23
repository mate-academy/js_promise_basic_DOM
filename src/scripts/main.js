'use strict';

const element = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  element.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.innerText = 'Promise was resolved!';
    document.body.appendChild(messageDiv);
  })
  .catch(() => {
    const errorMessageDiv = document.createElement('div');

    errorMessageDiv.className = 'message error-message';
    errorMessageDiv.innerText = 'Promise was rejected!';
    document.body.appendChild(errorMessageDiv);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .then(() => {
    const messageDiv = document.createElement('div');

    messageDiv.className = 'message';
    messageDiv.innerText = 'Promise was resolved!';
    document.body.appendChild(messageDiv);
  })
  .catch(() => {
    const errorMessageDiv = document.createElement('div');

    errorMessageDiv.className = 'message error-message';
    errorMessageDiv.innerText = 'Promise was rejected!';
    document.body.appendChild(errorMessageDiv);
  });
