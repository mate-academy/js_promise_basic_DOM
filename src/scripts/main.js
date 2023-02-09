'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const resolveMessage = 'Promise was resolved!';
const rejectMessage = 'Promise was rejected!';
const classSucces = 'message';
const classError = 'error-message';

function createMessage(className, message) {
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
    setTimeout(() =>
      reject(rejectMessage), 3000);
  });
}

function onSucces() {
  return createMessage(classSucces, resolveMessage);
}

function onError() {
  return createMessage(classError, rejectMessage);
}

const promise1 = createPromise1();
const promise2 = createPromise2();

promise1.then(onSucces, onError);
promise2.then(onSucces, onError);
