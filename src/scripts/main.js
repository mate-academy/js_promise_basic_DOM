'use strict';

const body = document.body;
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function success(message) {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">
      ${message}
    </div>
  `);
};

function error(message) {
  body.insertAdjacentHTML('beforeend', `
    <div class="error-message message">
      ${message}
    </div>
  `);
};

promise1.then(success, error);
promise2.then(success, error);
