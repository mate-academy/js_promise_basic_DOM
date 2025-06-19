'use strict';

const handler = (className, text) => {
  const div = document.createElement('div');

  div.innerText = text;
  div.className = className;
  document.body.append(div);
};

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => handler('message', 'Promise was resolved!'));
promise2.catch(() => handler('message error-message', 'Promise was rejected!'));
