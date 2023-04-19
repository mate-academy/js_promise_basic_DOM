'use strict';

const logo = document.querySelector('.logo');

function createPromise1() {
  return new Promise((resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  });
}

function createPromise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Rejected'));
    }, 3000);
  });
}

function makeSuccessMessage() {
  logo.insertAdjacentHTML('afterend', `
  <div class="message">Promise was resolved!</div>
  `);
}

function makeErrorMessage() {
  logo.insertAdjacentHTML('afterend', `
  <div class="message error-message">Promise was rejected!</div>
  `);
}

const promise1 = createPromise1();
const promise2 = createPromise2();

promise1
  .then(makeSuccessMessage)
  .catch(makeErrorMessage);

promise2
  .then(makeSuccessMessage)
  .catch(makeErrorMessage);
