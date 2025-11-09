'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  const handler = () => {
    resolve();
    logo.removeEventListener('click', handler);
  };

  logo.addEventListener('click', handler);
});

promise1.then(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
});

promise1.catch(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('timeout'));
  }, 3000);
});

promise2.then(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
});
