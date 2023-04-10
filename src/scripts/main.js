'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

function isSuccess() {
  document.body.insertAdjacentHTML(
    'beforeend',
    `
    <div class="message">
      Promise was resolved!
    </div>
  `
  );
}

function isRejected() {
  document.body.insertAdjacentHTML(
    'beforeend',
    `
    <div class="message error-message">
      Promise was rejected!
    </div>
  `
  );
}

promise1.then(isSuccess);
promise2.catch(isRejected);
