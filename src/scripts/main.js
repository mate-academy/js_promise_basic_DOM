'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('something bad happened'));
  }, 3000);
});

promise1.then(() => {
  const message = document.createElement('div');

  message.classList.add('message');
  message.textContent = 'Promise was resolved!';
  document.querySelector('body').append(message);
});

promise2.catch(() => {
  const message = document.createElement('div');

  message.classList.add('error-message');
  message.textContent = 'Promise was rejected!';
  document.querySelector('body').append(message);
});
