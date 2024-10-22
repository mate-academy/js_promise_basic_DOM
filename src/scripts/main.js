'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve('Promise was resolved!');
  });
});

promise1.then((value) => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = value;

  document.body.appendChild(message);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((value) => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.classList.add('error-message');
  message.textContent = value;

  document.body.appendChild(message);
});
