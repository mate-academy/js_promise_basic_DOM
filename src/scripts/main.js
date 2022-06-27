'use strict';

function createPromise1() {
  const logo = document.querySelector('.logo');

  const resolver = (resolve) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  };

  return new Promise(resolver);
}

function createPromise2() {
  const logo = document.querySelector('.logo');

  const rejecter = (reject) => {
    logo.addEventListener('click', () => {
      setTimeout(() => {
        reject();
      }, 3000);
    });
  };

  return new Promise(rejecter);
}

const promise1 = createPromise1();
const promise2 = createPromise2();

promise1
  .then(() => {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="message">Promise was resolved!</div>
    `);
  });

promise2
  .then(() => {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="error-message">Promise was rejected!</div>
    `);
  });
