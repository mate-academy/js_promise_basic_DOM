'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((message) => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="message">${message}</div>`,
  );
});

promise2.catch((error) => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="message error-message">${error.message}</div>`,
  );
});
