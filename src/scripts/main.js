'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Logo clicked!');
  });
});

promise1
  .then(() => {
    const message = document.createElement('div');

    message.className = 'message';
    message.textContent = 'Promise was resolved!';
    document.body.appendChild(message);
  })
  .catch(() => {
    const error = document.createElement('div');

    error.className = 'message error-message';
    error.textContent = 'Promise was rejected!';
    document.body.appendChild(error);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error!'));
  }, 3000);
});

promise2
  .then(() => {
    const message = document.createElement('div');

    message.className = 'message';
    message.textContent = 'Promise was resolved!';
    document.body.appendChild(message);
  })
  .catch(() => {
    const error = document.createElement('div');

    error.className = 'message error-message';
    error.textContent = 'Promise was rejected!';
    document.body.appendChild(error);
  });
