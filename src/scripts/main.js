'use strict';

// write your code here
const logo = document.querySelector('.logo');
const div = document.createElement('div');

div.className = 'message';

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

promise1.then((message) => {
  div.textContent = message;
  document.body.append(div);
});

promise2.catch((error) => {
  div.classList.add('error-message');
  div.textContent = error;
  document.body.append(div);
});
