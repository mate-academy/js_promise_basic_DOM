'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(function(resolve, reject) {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

promise1
  .then(() => {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="message">
        Promise was resolved!
      </div>
    `);
  });

promise2
  .catch(() => {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="message error-message">
        Promise was rejected!
      </div>
    `);
  });
