'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1
  .then(success);

promise2
  .catch(cancel);

function success(value) {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">${value}</div>
  `);
}

function cancel(num) {
  body.insertAdjacentHTML('beforeend', `
  <div class="message error-message">${num}</div>
`);
}

