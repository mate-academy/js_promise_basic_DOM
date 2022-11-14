'use strict';

// function createPromise () {
//   const logo = document.getElementByClassName('logo');

//   const resolver = () => {};
//   return new Promise(resolver);
// }

// const promise1  = createPromise();

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1
  .then(() => {
    logo.parentElement.insertAdjacentHTML('beforeend',
      '<div class="message">Promise was resolved!</div>');
  })
  .catch(() => {
    logo.parentElement.insertAdjacentHTML('beforeend',
      '<div class="error-message">Promise was rejected!</div>');
  });

promise2
  .then(() => {
    logo.parentElement.insertAdjacentHTML('beforeend',
      '<div class="message">Promise was resolved!</div>');
  })
  .catch(() => {
    logo.parentElement.insertAdjacentHTML('beforeend',
      '<div class="error-message">Promise was rejected!</div>');
  });
