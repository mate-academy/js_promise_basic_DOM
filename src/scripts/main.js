'use strict';

function createPromise() {
  const img = document.querySelector('.logo');

  const resolver = (resolve, reject) => {
    img.addEventListener('click', () => {
      resolve();
    });

    setTimeout(() => {
      reject();
    }, 3000);
  };

  return new Promise(resolver);
}

const promise1 = createPromise();
const promise2 = promise1.then(success, error);

function success(result) {
  document.body.insertAdjacentHTML('beforebegin', `
    <div class="message">Promise was resolved!</div
  `);
}

function error(fail) {
  document.body.insertAdjacentHTML('beforebegin', `
  <div class="message error-message">Promise was rejected!</div
  `);
}
