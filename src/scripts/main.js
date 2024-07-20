'use strict';

// write your code here
const logo = document.querySelector('.logo');

const createDivElemrnt = (content, nameOfClass = '') => {
  const div = document.createElement('div');

  div.innerText = content;
  div.className = `message ${nameOfClass}`;

  return document.querySelector('body').appendChild(div);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

promise1.then(() => {
  createDivElemrnt('Promise was resolved!');
});

promise2
  .then(() => {})
  .catch(() => {
    createDivElemrnt('Promise was rejected!', 'error-message');
  });
