'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  document.body
    .innerHTML += '<div class="message">Promise was resolved!</div>';
}).catch(() => {
  document.body
    .innerHTML += '<div class="error-message">Promise was rejected!</div>';
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('your message'));
  }, 3000);
});

promise2.then(() => {
  document.body
    .innerHTML += '<div class="message">Promise was resolved!</div>';
}).catch(() => {
  document.body
    .innerHTML += '<div class="error-message">Promise was rejected!</div>';
});
