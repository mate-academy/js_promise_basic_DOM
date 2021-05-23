'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', e => {
    resolve(logo.insertAdjacentHTML('afterend', `
      <div class="message">
        <span>
          Promise was resolved!
        </span>
      </div>
    `));
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(logo.insertAdjacentHTML('afterend', `
      <div class="error-message">
        <span>
          Promise was rejected!
        </span>
      </div>
    `));
  }, 3000);
});

promise1.then(() => {});

promise2.catch(() => {});
