'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promiseFirst = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promiseFirst.then(() => {
  const divResolved = document.createElement('div');

  divResolved.className = 'message';
  divResolved.textContent = 'Promise was resolved!';
  body.append(divResolved);
});

const promiseSecond = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

promiseSecond.catch(() => {
  const divRejected = document.createElement('div');

  divRejected.className = 'message error-message';
  divRejected.textContent = 'Promise was rejected!';
  body.append(divRejected);
});
