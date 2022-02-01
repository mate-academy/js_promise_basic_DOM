'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('clicked');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
  }, 3000);
});

promise1.then(() => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.append(div);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.className = 'error-message';
  div.textContent = 'Promise was rejected!';
  document.body.append(div);
});
