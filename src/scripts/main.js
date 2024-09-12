'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const successMessage = `<div class="message">Promise was resolved!</div>`;
const errorMessage = `<div class="message error-message">Promise was rejected!</div>`;

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1.then(() => {
  body.insertAdjacentHTML('beforeend', successMessage);
});

promise2.catch(() => {
  body.insertAdjacentHTML('beforeend', errorMessage);
})


