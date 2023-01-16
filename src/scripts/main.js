'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

function promiseHandler(className, message) {
  document.body.insertAdjacentHTML('beforeend', `
    <div class=${className}>
      Promise was ${message}!
    </div>
 `);
}

promise1
  .then(() => promiseHandler('message', 'resolved'))
  .catch(() => promiseHandler('error-message', 'rejected'));

promise2
  .then(() => promiseHandler('message', 'resolved'))
  .catch(() => promiseHandler('error-message', 'rejected'));
