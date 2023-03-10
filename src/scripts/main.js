'use strict';

const promise1 = new Promise(resolve => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(Error), 3000);
});

promise1.then(() => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
});

promise2.catch(() => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="error-message">
      Promise was rejected!
    </div>
  `);
});
