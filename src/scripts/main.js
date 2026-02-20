'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener(
    'click',
    () => {
      resolve();
    },
    { once: true },
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1
  .then(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    body.appendChild(div);
  })
  .catch((errorMessage) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.classList.add('error-message');
    div.textContent = errorMessage.message;
    body.appendChild(div);
  });

promise2
  .then(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    body.appendChild(div);
  })
  .catch((errorMessage) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.classList.add('error-message');
    div.textContent = errorMessage.message;
    body.appendChild(div);
  });
