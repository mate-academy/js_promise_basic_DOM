/* eslint-disable prefer-promise-reject-errors */
'use strict';

const logo = document.querySelector('.logo');
const div = document.createElement('div');

div.classList.add('message');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((data) => {
  createElement(data);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((error) => {
  createElement(error);
  div.classList.add('error-message');
});

const createElement = (text) => {
  div.textContent = text;
  document.body.appendChild(div);
};
