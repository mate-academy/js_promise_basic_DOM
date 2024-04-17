'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((message) => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `<div class="message">${message}</div>`,
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((error) => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `<div class="message error-message">${error}</div>`,
  );
});
