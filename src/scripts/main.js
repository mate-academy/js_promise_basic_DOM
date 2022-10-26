'use strict';

const logo = document.querySelector('.logo');

/* First promis with it's methods */

const promise1 = new Promise(function(resolve, reject) {
  logo.addEventListener('click', () => resolve());
});

promise1.then(() => {
  document.body.innerHTML = '<div class="message">Promise was resolved!</div>';
});

promise1.catch(() => {
  document.body.innerHTML
   = '<div class="error-message">Promise was rejected!</div>';
});

/* Second promis with it's methods */

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error()), 3000);
});

promise2.then(() => {
  document.body.innerHTML = '<div class="message">Promise was resolved!</div>';
});

promise2.catch(() => {
  document.body.innerHTML
   = '<div class="error-message">Promise was rejected!</div>';
});
