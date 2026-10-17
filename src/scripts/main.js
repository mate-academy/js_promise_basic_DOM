'use strict';

const promiseButton = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  promiseButton.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((value) => {
    document.body.innerHTML += `<div class="message">${value}</div>`;
  })
  .catch((value) => {
    document.body.innerHTML += `<div class="message error-message">${value.message}</div>`;
  });

promise2
  .then((value) => {
    document.body.innerHTML += `<div class="message">${value}</div>`;
  })
  .catch((value) => {
    document.body.innerHTML += `<div class="message error-message">${value.message}</div>`;
  });
