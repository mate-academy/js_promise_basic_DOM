'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const notification = (message, className) => {
  body.insertAdjacentHTML('beforeend', `
    <div class="${className}">${message}</div>
  `);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', (e) => {
    resolve('Promise was resolved');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected')), 3000);
});

promise1.then((message) => {
  notification(message, 'message');
});

promise2.catch((message) => {
  notification(message, 'message error-message');
});
