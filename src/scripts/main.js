'use strict';

// write your code here
const promise1 = () => {
  const logo = document.querySelector('.logo');

  return new Promise((resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });
  });
};

const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error());
    }, 3000);
  });

const handler = (text, styles) => {
  const div = document.createElement('div');

  div.classList.add(...styles);
  div.textContent = text;
  document.body.appendChild(div);
};

promise1()
  .then(() => {
    handler('Promise was resolved!', ['message']);
  })
  .catch(() => {
    handler('Promise was rejected!', ['message', 'error-message']);
  });

promise2()
  .then(() => {
    handler('Promise was resolved!', ['message']);
  })
  .catch(() => {
    handler('Promise was rejected!', ['message', 'error-message']);
  });
