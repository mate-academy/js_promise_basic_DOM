'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('something bad happened'));
  }, 3000);
});

promise1.then(() => {
  const div = document.createElement('div');

  div.innerHTML = 'Promise was resolved!';
  div.classList.add('message');
  body.append(div);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.innerHTML = 'Promise was rejected!';
  div.classList.add('error-message');
  body.append(div);
});
