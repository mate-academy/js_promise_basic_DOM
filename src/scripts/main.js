'use strict';

const logo = document.querySelector('.logo');
const bodyElement = document.querySelector('body');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error('Promise rejected'));
  }, 2000);
});

function errorMessage(message) {
  bodyElement.insertAdjacentHTML('afterbegin', `
      <div class="message error-message">
        Promise was rejected!
      <div>
      `);
}

function successMessage(message) {
  bodyElement.insertAdjacentHTML('afterbegin', `
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
