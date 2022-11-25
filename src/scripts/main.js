'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve('promise1 resolved'));
});

promise1
  .then(() => {
    logo.insertAdjacentHTML(
      'afterend',
      '<div class="message">Promise was resolved!</div>'
    );
  })
  .catch(() => {
    logo.insertAdjacentHTML(
      'afterend',
      '<div class="error-message">Promise was rejected!</div>'
    );
  }); // never returned

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('promise2 rejected')), 3000);
});

promise2
  .then(() => {
    logo.insertAdjacentHTML(
      'afterend',
      '<div class="message">Promise was resolved!</div>'
    );
  }) // never returned
  .catch(() => {
    logo.insertAdjacentHTML(
      'afterend',
      '<div class="message error-message">Promise was rejected!</div>'
    );
  });
