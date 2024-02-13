'use strict';

const logo = document.querySelector('.logo');

const getMessage = (error) => {
  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');

  if (!error) {
    messageDiv.textContent = 'Promise was resolved!';
  } else {
    messageDiv.classList.add('error-message');
    messageDiv.textContent = 'Promise was rejected!';
  }

  document.body.appendChild(messageDiv);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(); // eslint-disable-line prefer-promise-reject-errors
  }, 3000);
});

promise1.then(() => getMessage(false));
promise2.catch(() => getMessage(true));
