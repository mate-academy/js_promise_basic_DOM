/* eslint-disable prefer-promise-reject-errors */
'use strict';
// write your code here

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

promise1.then(() => {
  const div = document.createElement('div');

  div.setAttribute('class', 'message');
  div.textContent = 'Promise was resolved!';
  body.appendChild(div);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.setAttribute('class', 'error-message');
  div.textContent = 'Promise was rejected!';
  body.appendChild(div);
});
