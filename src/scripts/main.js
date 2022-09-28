'use strict';

const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

const success = '<div class="message">Promise was resolved!</div>';
const error = '<div class="message error-message">Promise was rejected!</div>';

promise1.then(() => body.insertAdjacentHTML('beforeend', success));

promise2.catch(() => body.insertAdjacentHTML('beforeend', error));
