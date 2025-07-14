'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.append(div);
});

/* eslint-disable */
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  document.body.append(div);
});
