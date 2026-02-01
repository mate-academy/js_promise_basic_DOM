'use strict';

// write your code here
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Logo was clicked');
  });
});

promise1.then((result) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  body.appendChild(div);
});

promise1.catch(() => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  body.appendChild(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Time is up'));
  }, 3000);
});

promise2.then(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  body.appendChild(div);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  body.appendChild(div);
});
