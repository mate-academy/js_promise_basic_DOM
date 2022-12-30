'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise(function(resolve) {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, '3000');
});

promise1.then(
  function(value) {
    body.insertAdjacentHTML('beforeend',
      `<div class="message">${value}</div>`);
  }
);

promise2.catch(
  function(error) {
    body.insertAdjacentHTML('beforeend',
      `<div class="message error-message">${error}</div>`);
  }
);
