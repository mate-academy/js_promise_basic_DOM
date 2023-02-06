'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(`Promise was resolved!`);
  });
});

promise1.then(res => {
  body.insertAdjacentHTML('beforeend', `
  <div class="message">${res}</div>
  `);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`Promise was rejected!`));
  }, 3000);
});

promise2.catch(error => {
  body.insertAdjacentHTML('beforeend', `
  <div class="error-message">${error}</div>
  `);
});
