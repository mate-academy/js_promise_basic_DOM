'use strict';

const promiseHandler = (text, isError = false) => {
  const message = document.createElement('div');

  message.classList.add('message');

  if (isError) {
    message.classList.add('error-message');
  }
  message.textContent = text;
  document.body.append(message);
};

let promiseAppeared = false;

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    if (!promiseAppeared) {
      promiseAppeared = true;
      resolve('Promise was resolved!');
    }
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!promiseAppeared) {
      promiseAppeared = true;
      reject(new Error('Promise was rejected!'));
    }
  }, 3000);
});

promise1.then(promiseHandler).catch((error) => promiseHandler(error, true));
promise2.then(promiseHandler).catch((error) => promiseHandler(error, true));
