'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1
  .then(text => (
    body.insertAdjacentHTML(
      'beforeend',
      `<div class="message">${text}</div>`
    )
  ));

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise2
  .catch(error => (
    body.insertAdjacentHTML(
      'beforeend',
      `<div class="message">${error}</div>`
    )
  ));
