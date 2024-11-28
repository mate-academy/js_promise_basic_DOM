'use strict';

// write your code here
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1.then(information => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = information;
  body.appendChild(div);
}).catch(() => {
  return 'error';
});

promise2.then(() => {
  return 'success';
}).catch(information => {
  const div = document.createElement('div');

  div.classList.add('error-message');
  div.textContent = information;
  body.appendChild(div);
});
