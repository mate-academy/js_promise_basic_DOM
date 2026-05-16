'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const fulfilled = () =>
  document.body.insertAdjacentHTML(
    'afterbegin',
    '<div class="message">Promise was resolved!</div>',
  );
const rejected = () =>
  document.body.insertAdjacentHTML(
    'afterbegin',
    '<div class="message error-message">Promise was rejected!</div>',
  );

promise1.then(fulfilled, rejected);

promise2.then(fulfilled, rejected);
