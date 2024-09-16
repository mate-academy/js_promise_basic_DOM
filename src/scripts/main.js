'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function getSuccessMessage(message) {
  return body.insertAdjacentHTML(
    'beforeend',
    `<div class="message">${message}</div>`
  );
}

function getErrorMessage(message) {
  return body.insertAdjacentHTML(
    'beforeend',
    `<div class="message error-message">${message.message}</div>`
  );
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve('Promise was resolved!'));
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1.then(getSuccessMessage).catch(getErrorMessage);
promise2.then(getSuccessMessage).catch(getErrorMessage);
