'use strict';

const pageLogo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  pageLogo.addEventListener('click', (e) => {
    resolve(e.target);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(() => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';
    document.body.append(message);
  })
  .catch(() => {
    const message = document.createElement('div');

    message.classList.add('message', 'error-message');
    message.textContent = 'Promise was rejected!';
    document.body.append(message);
  });

promise2
  .then(() => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';
    document.body.append(message);
  })
  .catch(() => {
    const message = document.createElement('div');

    message.classList.add('message', 'error-message');
    message.textContent = 'Promise was rejected!';
    document.body.append(message);
  });
