'use strict';

const body = document.body;

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  success();
});

promise2.catch(() => {
  error();
});

function success() {
  const messageResolved = document.createElement('div');

  messageResolved.classList.add('message');
  messageResolved.textContent = 'Promise was resolved!';
  body.append(messageResolved);
}

function error() {
  const messageRejected = document.createElement('div');

  messageRejected.classList.add('message', 'error-message');
  messageRejected.textContent = 'Promise was rejected!';
  body.append(messageRejected);
}
