'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

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
  .then(result => {
    body.insertAdjacentHTML(
      'beforeend',
      `<div class="message">${result}</div>`,
    );
  })
  .catch(result => {
    // console.log(result);
  });

promise2
  .then(result => {
    // console.log(result);
  })
  .catch(result => {
    body.insertAdjacentHTML(
      'beforeend',
      `<div class="message error-message">${result}</div>`,
    );
  });
