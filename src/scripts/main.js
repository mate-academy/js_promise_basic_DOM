'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 2000);
});

function errorMessage() {
  document.querySelector('body').insertAdjacentHTML('afterbegin', `
      <div class="message error-message">
        Promise was rejected!
      <div>
      `);
}

function successMessage() {
  document.querySelector('body').insertAdjacentHTML('afterbegin', `
      <div class="message">
        Promise was resolved!
      <div>
      `);
}

promise1
  .then(successMessage)
  .catch();

promise2
  .then()
  .catch(errorMessage);
