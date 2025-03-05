'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

function addNotification(message, isError = false) {
  const div = document.createElement('div');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }
  div.textContent = message;
  body.append(div);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener(
    'click',
    () => {
      resolve('Promise was resolved!');
    },
    { once: true },
  );
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1.then((message) => addNotification(message));
promise2.catch((error) => addNotification(error.message, true));
