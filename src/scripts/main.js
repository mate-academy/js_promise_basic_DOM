'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const handler = document.createElement('div');

  handler.classList.add('message');
  handler.textContent = 'Promise was resolved!';
  document.body.append(handler);
});

promise1.catch(() => {
  const handler = document.createElement('div');

  handler.classList.add('message', 'error-message');
  handler.textContent = 'Promise was rejected!';

  document.body.append(handler);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2.then(() => {
  const handler = document.createElement('div');

  handler.classList.add('message');
  handler.textContent = 'Promise was resolved!';

  document.body.append(handler);
});

promise2.catch(() => {
  const handler = document.createElement('div');

  handler.classList.add('message', 'error-message');
  handler.textContent = 'Promise was rejected!';
  document.body.append(handler);
});
