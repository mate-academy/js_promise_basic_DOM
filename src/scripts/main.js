'use strict';

const root = document.querySelector('body');
const logo = root.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    reject(Error);
  });
});

promise1.then(() => root.insertAdjacentHTML('beforeend', `
  <div class="message">
    Promise was resolved!
  </div>
`));

promise2.catch(() => setTimeout(() => {
  root.insertAdjacentHTML('beforeend', `
    <div class="error-message">
      Promise was rejected!
    </div>
  `);
}, 3000));
