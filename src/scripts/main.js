'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise(function (resolve, reject) {
  logo.addEventListener('click', () => {
    resolve('Resolved');
  });
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

const messageError = document.createElement('div');
const messageSuccess = document.createElement('div');

function handleSuccess() {
  messageSuccess.classList.add('message');
  messageSuccess.textContent = 'Promise was resolved!';
  document.body.appendChild(messageSuccess);
}

function handleError() {
  messageError.classList.add('message', 'error-message');
  messageError.textContent = 'Promise was rejected!';
  document.body.appendChild(messageError);
}

promise1.then(handleSuccess).catch(handleError);
promise2.then(handleSuccess).catch(handleError);
