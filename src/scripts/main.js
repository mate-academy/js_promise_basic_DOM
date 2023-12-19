'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promiseMessage = (m) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.innerText = m;
  body.appendChild(div);
};

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1
  .then(() => {
    promiseMessage('Promise was resolved!');
  })
  .catch(() => {
    promiseMessage('Promise was rejected!');
  });

promise2
  .then(() => {
    promiseMessage('Promise was resolved!');
  })
  .catch(() => {
    promiseMessage('Promise was rejected!');
  });
