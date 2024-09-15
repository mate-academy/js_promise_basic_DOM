'use strict';

const promise1 = new Promise(resolve => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

const body = document.querySelector('body');

function errorMassage() {
  body.insertAdjacentHTML('beforeend', `
    <div class="error-message">Promise was rejected!</div>
  `);
}

function successMassage() {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">Promise was resolved!</div>
  `);
}

promise1
  .then(successMassage)
  .catch(errorMassage);

promise2.catch(errorMassage);
