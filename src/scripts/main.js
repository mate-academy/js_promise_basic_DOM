'use strict';

const logo = document.querySelector('.logo');
const body = document.body;

logo.addEventListener('click', () => {
  const promise1 = new Promise((resolve, reject) => {
    resolve();
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Something went wrong!'));
    }, 3000);
  });

  promise1.then(() => {
    success();
  });

  promise2.catch(() => {
    error();
  });
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
