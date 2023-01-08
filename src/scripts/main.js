'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(function(resolve, reject) {
  resolve(logo.addEventListener('click', () => {
    logo.insertAdjacentHTML('afterend', `
      <div class="message">Promise was resolved!<div>
    `);
  }));
});

promise1
  .then(
    result => result
  )
  .catch(
    error => error
  );

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(logo.insertAdjacentHTML('afterend', `
  <div class="message error-message">Promise was rejected!<div>
`)), 3000);
});

promise2
  .catch(
    error => error
  );
