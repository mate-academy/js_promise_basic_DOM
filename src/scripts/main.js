'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((result) => {
  const message = document.createElement('div');

  message.textContent = result;
  message.classList.add('message');

  document.body.append(message);
});

promise2.catch((result) => {
  const message = document.createElement('div');

  message.textContent = result;
  message.classList.add('message', 'error-message');

  document.body.append(message);
});
