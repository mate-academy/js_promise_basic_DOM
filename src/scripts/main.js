'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
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
    const message = document.createElement('div');

    message.className = 'message';
    message.innerText = 'Promise was resolved!';
    document.body.append(message);
  })
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.className = 'message error-message';
    errorMessage.innerText = 'Promise was rejected!';
    document.body.append(errorMessage);
  });

promise2
  .then(() => {
    const message = document.createElement('div');

    message.className = 'message';
    message.innerText = 'Promise was resolved!';
    document.body.append(message);
  })
  .catch(() => {
    const errorMessage = document.createElement('div');

    errorMessage.className = 'message error-message';
    errorMessage.innerText = 'Promise was rejected!';
    document.body.append(errorMessage);
  });
