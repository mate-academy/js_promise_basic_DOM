'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo?.addEventListener('click', (e) => {
    resolve('');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise was rejected!')), 3000);
});

promise1
  .then((result) => {
    document.body.insertAdjacentHTML(
      'beforeend',
      '<div class="message">Promise was resolved!</div>',
    );
  })
  .catch((err) => {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div class="message error-message">${err}</div>`,
    );
  });

promise2
  .then((result) => {
    document.body.insertAdjacentHTML(
      'beforeend',
      '<div class="message">Promise was resolved!</div>',
    );
  })
  .catch((err) => {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div class="message error-message">${err}</div>`,
    );
  });
