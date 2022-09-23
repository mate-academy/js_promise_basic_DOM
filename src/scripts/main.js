'use strict';

// write your code here
const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1
  .then(res => {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div class="message">${res}</div>`
    );
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .catch(err => {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div class="message error-message">${err}</div>`
    );
  });
