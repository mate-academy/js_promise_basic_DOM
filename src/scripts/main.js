'use strict';

const body = document.body;

const promise1 = new Promise((resolve) => {
  const logo = body.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

function success() {
  body.insertAdjacentHTML('beforeend', `
  <div class="message">
    Promise was resolved!
  </div>
  `);
}

function error() {
  body.insertAdjacentHTML('beforeend', `
  <div class="error-message message">
    Promise was rejected!
  </div>
  `);
}

promise1.then(success);
promise2.then(success, error);
