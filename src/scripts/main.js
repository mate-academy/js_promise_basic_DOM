'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', e => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1.then(() => {
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
});

promise2.catch(() => {
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="message error-message">
      Promise was rejected!
    </div>
  `);
});
