'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const first = new Promise((resolve) => {
  logo.addEventListener('click', (e) => {
    resolve('Promise was resolved!');
  });
});

const second = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error('Promise was rejected!')), 3000);
});

first.then((message) => body.insertAdjacentHTML('beforebegin', `
<div class="message">${message}</div>
`));

second.catch((message) => body.insertAdjacentHTML('beforebegin', `
<div class="error-message message">${message}</div>
`));
