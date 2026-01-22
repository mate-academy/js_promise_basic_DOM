'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const errorMessage = 'Promise was rejected!';
const successfulMessage = 'Promise was resolved!';
const messageClass = ['message'];
const errorMessageClasses = ['message', 'error-message'];

function appendDiv(classList, message) {
  const div = document.createElement('div');

  div.classList.add(...classList);
  div.textContent = message;

  body.append(div);
}

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

promise1
  .then(() => appendDiv(messageClass, successfulMessage))
  .catch(() => appendDiv(errorMessageClasses, errorMessage));

promise2
  .then(() => appendDiv(messageClass, successfulMessage))
  .catch(() => appendDiv(errorMessageClasses, errorMessage));
