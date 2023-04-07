'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function addThenCatchToPromise(promise) {
  return promise
    .then(() => {
      body.insertAdjacentHTML('beforeend', `
    <div class="message">Promise was resolved!</div>
    `);
    })
    .catch(() => {
      body.insertAdjacentHTML('beforeend', `
      <div class="error-message message">Promise was rejected!</div>
    `);
    });
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

addThenCatchToPromise(promise2);
addThenCatchToPromise(promise1);
