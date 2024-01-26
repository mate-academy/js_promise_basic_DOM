'use strict';

const promise1 = new Promise((resolve, reject) => {
  document.querySelector('.logo')
    .addEventListener('click', () => {
      resolve();
    });
});

promise1
  .then(() => {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="message">
        Promise was resolved!
      </div>
    `);
  })
  .catch(() => {});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

promise2
  .then(() => {})
  .catch(() => {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="message error-message">
        Promise was rejected!
      </div>
    `);
  });
