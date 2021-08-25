'use strict';

const logo = document.querySelector('.logo');

const promise = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise.then((message) => {
  logo.insertAdjacentHTML('afterend', `
    <div class="message">${message}</div>`);
});

promise2.catch((message) => {
  logo.insertAdjacentHTML('afterend', `
    <div class="error-message message">${message}</div>`);
});
