'use strict';

const logo = document.querySelector('.logo');

function createPromise() {
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  };

  return new Promise(resolver);
}

const promise1 = createPromise();

promise1.then(() => {
  success(success);

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(error), 3000);
  });

  return promise2;
}, error)
  .then(success, error);

function success() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="message">Promise was resolved!</div>
    `);
};

function error() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="error-message">Promise was rejected!</div>
    `);
};
