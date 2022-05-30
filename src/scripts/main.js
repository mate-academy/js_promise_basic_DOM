'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', e => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(result => {
    body.insertAdjacentHTML('afterbegin', `
      <div class="message">${result}</div>
    `);
  });

promise2
  .catch(result => {
    body.insertAdjacentHTML('afterbegin', `
      <div class="error-message">${result}</div>
    `);
  });
