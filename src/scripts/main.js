'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1.then(() => {
  const div = document.createElement('div');

  div.classList = 'message';
  div.innerHTML = 'Promise was resolved!';

  body.append(div);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.classList = 'error-message';
  div.innerHTML = 'Promise was rejected!';

  body.append(div);
});
