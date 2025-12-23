'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener(
    'click',
    () => {
      resolve();
    },
    { once: true },
  );
});

promise1.then(() => {
  const element = document.createElement('div');

  element.classList.add('message');
  element.textContent = 'Promise was resolved!';
  document.body.appendChild(element);
});

promise1.catch(() => {
  const element = document.createElement('div');

  element.classList.add('message', 'error-message');
  element.textContent = 'Promise was rejected!';
  document.body.appendChild(element);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.then(() => {
  const element = document.createElement('div');

  element.classList.add('message');
  element.textContent = 'Promise was resolved!';
  document.body.appendChild(element);
});

promise2.catch(() => {
  const element = document.createElement('div');

  element.classList.add('message', 'error-message');
  element.textContent = 'Promise was rejected!';
  document.body.appendChild(element);
});
