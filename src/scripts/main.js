'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(function(resolve) {
  logo.addEventListener('click', () => {
    resolve(`<div class="message">
    Promise was resolved!
  </div>`);
  });
});

promise1.then(data => {
  document.body.insertAdjacentHTML('beforeend', data);
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error(`
      <div class="error-message">
        Promise was rejected!
      </div>
    `)), 3000);
});

promise2.catch(
  error => document.body.insertAdjacentHTML('beforeend', error),
);
