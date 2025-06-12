'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then((text) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = text;
  document.body.appendChild(div);
});

promise2.catch((err) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.textContent = err.message;
  document.body.appendChild(div);
});
