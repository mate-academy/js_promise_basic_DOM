'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const errorMessage = 'Promise was rejected!';
const successMessage = 'Promise was resolved!';

const promise1 = new Promise(function(resolve, reject) {
  logo.addEventListener('click', () => {
    resolve(errorMessage);
  });
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error(errorMessage)), 3000);
});

promise1.then((body.insertAdjacentHTML('beforeend',
  `<div class="message">${errorMessage}</div>`)));

promise2.catch((body.insertAdjacentHTML('beforeend',
  `<div class="message">${successMessage}</div>`)));
