'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout((error) => reject(error), 3000);
});

promise1.then(() => {
  const div = document.createElement('div');

  div.classList = 'message';
  div.textContent = 'Promise was resolved!';

  body.append(div);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.classList = 'message error-message';
  div.textContent = 'Promise was rejected!';

  body.append(div);
});
