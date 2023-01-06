'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  resolve(`
    <div class="message">
      Promise was resolved!
    </div>
  `);
});

promise1.then(success => {
  logo.addEventListener('click', () => {
    body.innerHTML += success;
  });
});

const promise2 = new Promise((resolve, reject) => {
  reject(new Error(`
    <div class="error-message">
      Promise was rejected!
    </div>
  `));
});

promise2.catch(error => {
  setTimeout(() => {
    body.innerHTML += error;
  }, 3000);
});
