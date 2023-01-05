'use strict';

// write your code here

const logotype = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logotype.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1
  .then(result => {
    logotype.insertAdjacentHTML('beforeend', `
      <div class="message">${result}</div>
    `);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .then(result => {})
  .catch(errors => {
    body.insertAdjacentHTML('beforeend', `
      <div class="error-message">${errors}</div>
      `);
  });
