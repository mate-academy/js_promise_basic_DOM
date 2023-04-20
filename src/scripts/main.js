'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve(`<div class="message">Promise was resolved!</div>`);
  });
});

promise1.then(result => {
  body.insertAdjacentHTML('beforeend', result);
})
  .catch(result => {
    body.insertAdjacentHTML('beforeend', result);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`<div class="error-message">Promise was rejected!</div>`));
  }, 3000);
});

promise2.then(result => {
  body.insertAdjacentHTML('beforeend', result);
})
  .catch(result => {
    body.insertAdjacentHTML('beforeend', result.message)
  });
