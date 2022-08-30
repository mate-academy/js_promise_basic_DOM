'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

const html1 = `<div class="message">Promise was resolved!</div>`;

promise1
  .then(res => {
    document.body.insertAdjacentHTML('beforeend', html1);
  }).catch(err => alert(err));

const html2 = `<div class="error-message">Promise was rejected!</div>`;

promise2
  .catch(() => {
    document.body.insertAdjacentHTML('beforeend', html2);
  });
