'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const createElement = function (className, text) {
  const div = document.createElement('div');

  div.className = className;

  div.textContent = text;

  body.append(div);
};
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('First promise was resolved');
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise1
  .then(() => {
    createElement('message', 'Promise was resolved!');
  })
  .catch(() => {
    createElement('message error-message', 'Promise was rejected!');
  });

promise2
  .then(() => {
    createElement('message', 'Promise was resolved!');
  })
  .catch(() => {
    createElement('message error-message', 'Promise was rejected!');
  });
