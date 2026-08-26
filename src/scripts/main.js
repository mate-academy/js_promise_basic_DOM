'use strict';

// write your code here
const logo = document.querySelector('.logo');
// Promise 1 — виконується після кліку на .logo
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});
// Promise 2 — відхиляється через 3 секунди
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

// Обробники promise1
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

// Обробники promise2
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
