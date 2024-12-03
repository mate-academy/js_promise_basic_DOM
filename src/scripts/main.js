'use strict';

// write your code here
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const body = document.querySelector('body');
const div = document.createElement('div');

div.classList.add('message');

promise1.then(() => {
  div.textContent = 'Promise was resolved!';

  body.appendChild(div);
});

promise2.catch(() => {
  div.classList.add('error-message');
  div.textContent = 'Promise was rejected!';

  body.appendChild(div);
});
