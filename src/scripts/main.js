'use strict';

// eslint-disable-next-line no-unused-vars
const promise1 = new Promise((resolve, reject) => {
  const logo = document.getElementsByClassName('logo')[0];

  logo.addEventListener('click', () => {
    resolve();
  });
})
  .then(() => {
    document.body.innerHTML += `<div class="message">Promise was resolved!</div>`;
  })
  .catch(() => {
    document.body.innerHTML += `<div class="message error-message">Promise was rejected!</div>`;
  });

// eslint-disable-next-line no-unused-vars
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('rejected'));
  }, 3000);
})
  .then(() => {
    document.body.innerHTML += `<div class="message">Promise was resolved!</div>`;
  })
  .catch(() => {
    document.body.innerHTML += `<div class="message error-message">Promise was rejected!</div>`;
  });
