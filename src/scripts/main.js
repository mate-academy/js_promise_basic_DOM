/* eslint-disable no-console */
'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(
      body.insertAdjacentHTML(
        'beforeend',
        '<div class="message">Promise was resolved!</div>',
      ),
    );
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(
      body.insertAdjacentHTML(
        'beforeend',
        '<div class="message error-message">Promise was rejected!</div>',
      ),
    );
  }, 3000);
});

promise1
  .then(() => {
    console.log('Promise was resolved!');
  })
  .catch(() => {
    console.log('Promise was rejected!');
  });

promise2
  .then(() => {
    console.log('Promise was resolved!');
  })
  .catch(() => {
    console.log('Promise was rejected!');
  });
