'use strict';

const body = document.querySelector('body');

const logo = document.querySelector('.logo');

const promis1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve(body.insertAdjacentHTML('afterbegin',
      '<div class="message">Promise was resolved!</div>'));
  });
});

const promis2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(body.insertAdjacentHTML('afterbegin',
    '<div class="message error-message">Promise was rejected!</div>')), 3000);
});

promis1.then();
promis2.catch();
