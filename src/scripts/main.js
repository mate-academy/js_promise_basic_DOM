'use strict';

// write your code here
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    e.preventDefault();
    resolve();
  });
});

promise1.then(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = `Promise was resolved!`;
  document.body.appendChild(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.catch(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.textContent = `Promise was rejected!`;

  document.body.appendChild(div);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.textContent = `Promise was rejected!`;

  document.body.appendChild(div);
});

promise2.then(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = `Promise was resolved!`;
  document.body.appendChild(div);
});
