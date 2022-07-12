'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(result =>
    body.insertAdjacentHTML('beforeend', `
      <div class="message">${result}</div>
    `)
  );

promise2
  .then()
  .catch(error =>
    body.insertAdjacentHTML('beforeend', `
      <div class="error-message">${error}</div>
    `));
