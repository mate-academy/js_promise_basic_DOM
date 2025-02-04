'use strict';

// write your code here
// promise1 буде виконана, коли користувач клацне на .logo
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise 1 resolved!');
  });
});

// promise2 буде відхилена через 3 секунди
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise 2 rejected!');
  }, 3000);
});

// Обробник успіху для promise1
promise1.then((message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
});

// Обробник помилки для promise1
promise1.catch(() => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
});

// Обробник успіху для promise2
promise2.then((message) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
});

// Обробник помилки для promise2
promise2.catch(() => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
});
