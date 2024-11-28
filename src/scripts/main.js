'use strict';
/* eslint-disable prefer-promise-reject-errors */

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise was rejected!');
  }, 3000);
});

promise1.then((responseMessage) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = responseMessage;
  document.body.appendChild(div);
});

promise2.catch((error) => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = error;
  document.body.appendChild(div);
});
