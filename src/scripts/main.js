'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('<div class="message">Promise was resolved!</div>');
  });
});

const promise2 = promise1.then(div => {
  document.body.insertAdjacentHTML('beforeend', div);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error
      = '<div class="error-message message">Promise was rejected!</div>';

      reject(error);
    }, 3000);
  });
});

promise2.catch((error) => document.body.insertAdjacentHTML('beforeend', error));
