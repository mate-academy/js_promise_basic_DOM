'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

function promiseResolved() {
  const message = document.createElement('div');

  message.classList.add('message');
  message.innerText = 'Promise was resolved!';

  body.appendChild(message);
}

function promiseRejected() {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.innerText = 'Promise was rejected!';

  body.appendChild(message);
}

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('F'));
  }, 3000);
});

promise1.then(() => {
  promiseResolved();
});

promise2.catch(() => {
  promiseRejected();
});
