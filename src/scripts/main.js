'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => resolve());
})
  
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

const promises = (promise) => {
  promise.then(() => {
    body.insertAdjacentHTML('beforeend',
      '<div class="message">Promise was resolved!</div>')})
      .catch(() => {
        body.insertAdjacentHTML('beforeend',
          '<div class="error-message">Promise was rejected!</div>')});
};

promises(promise1);
promises(promise2);