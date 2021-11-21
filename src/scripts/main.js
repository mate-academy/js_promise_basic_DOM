'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = 'Promise was resolved!';
  document.body.append(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error!')), 3000);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.classList.add('error-message');
  div.innerText = 'Promise was rejected!';
  document.body.append(div);
});
