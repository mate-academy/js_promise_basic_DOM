'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    const message = document.createElement('div');

    message.className = 'message';
    message.textContent = 'Promise was resolved!';

    document.body.append(message);
  })
  .catch(() => {
    const message = document.createElement('div');

    message.className = 'message error-message';
    message.textContent = 'Promise was rejected!';

    document.body.append(message);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .then(() => {
    const message = document.createElement('div');

    message.className = 'message';
    message.textContent = 'Promise was resolved!';

    document.body.append(message);
  })
  .catch(() => {
    const message = document.createElement('div');

    message.className = 'message error-message';
    message.textContent = 'Promise was rejected!';

    document.body.append(message);
  });
