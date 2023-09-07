'use strict';

const button = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  button.addEventListener('click', () => {
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

  document.body.append(div);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.classList = 'error-message';
  div.innerHTML = 'Promise was rejected!';

  document.body.append(div);
});
