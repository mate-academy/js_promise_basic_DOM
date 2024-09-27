'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const resolveMessage = 'Promise was resolved!';
const rejectMessage = 'Promise was rejected!';
const messageClass = 'message';
const errorMessageClass = 'error-message';

function createElement(className, message) {
  body.insertAdjacentHTML('beforeend', `
  <div class="${className}">${message}</div>
`);
}

function createPromise1() {
  return new Promise((resolve) => {
    logo.addEventListener('click', () => {
      resolve(resolveMessage);
    });
  });
}

function createPromise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(rejectMessage), 3000);
  });
}

function onSuccess() {
  return createElement(messageClass, resolveMessage);
}

function onError() {
  return createElement(errorMessageClass, rejectMessage);
}

const promise1 = createPromise1();
const promise2 = createPromise2();

promise2.then(onSuccess, onError);
promise1.then(onSuccess, onError);
