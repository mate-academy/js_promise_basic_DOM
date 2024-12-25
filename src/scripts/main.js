'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

// eslint-disable-next-line promise/param-names
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

const successHandler = () => {
  const messageDiv = document.createElement('div');

  messageDiv.className = 'message';
  messageDiv.textContent = 'Promise was resolved!';
  document.body.appendChild(messageDiv);
};

const errorHandler = () => {
  const errorDiv = document.createElement('div');

  errorDiv.className = 'message error-message';
  errorDiv.textContent = 'Promise was rejected!';
  document.body.appendChild(errorDiv);
};

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
