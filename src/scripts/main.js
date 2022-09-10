'use strict';

const rootElement = document.body;

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

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
  rootElement.insertAdjacentHTML('beforeend', `
    <div class="message">
      Promise was resolved!
    </div>
  `);
};

function error() {
  rootElement.insertAdjacentHTML('beforeend', `
    <div class="message error-message">
      Promise was rejected!
    </div>
  `);
};

promise1.then(success, error);
promise2.then(success, error);
