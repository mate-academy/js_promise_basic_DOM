'use strict';

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
}).catch((error) => {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.textContent = error.message;
  document.body.appendChild(message);
});

promise2.then(() => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.body.appendChild(message);
}).catch((error) => {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.textContent = error.message;
  document.body.appendChild(message);
});
