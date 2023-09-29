'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const resolvedPromise = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

resolvedPromise
  .then(text => (
    body.insertAdjacentHTML(
      'beforeend',
      `<div class="message">${text}</div>`
    )
  ));

const rejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

rejectedPromise
  .catch(error => (
    body.insertAdjacentHTML(
      'beforeend',
      `<div class="error-message">${error}</div>`
    )
  ));
