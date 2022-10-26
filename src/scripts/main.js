'use strict';

const logoImage = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logoImage.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1
  .then(() => {
    logoImage.parentElement.insertAdjacentHTML('beforeend',
      '<div class="message">Promise was resolved!</div>');
  })
  .catch(() => {
    logoImage.parentElement.insertAdjacentHTML('beforeend',
      '<div class="error-message">Promise was rejected!</div>');
  });

promise2
  .then(() => {
    logoImage.parentElement.insertAdjacentHTML('beforeend',
      '<div class="message">Promise was resolved!</div>');
  })
  .catch(() => {
    logoImage.parentElement.insertAdjacentHTML('beforeend',
      '<div class="error-message">Promise was rejected!</div>');
  });
