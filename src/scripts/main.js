'use strict';

// write your code here
const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('wrong')), 3000);
});

promise1
  .then(() => {
    const newEl = document.createElement('div');

    newEl.className = 'message';
    newEl.innerText = 'Promise was resolved!';
    document.body.append(newEl);
  })
  .catch(() => {
    const newEl = document.createElement('div');

    newEl.classList.add('message', 'error-message');
    newEl.innerText = 'Promise was rejected!';
    document.body.append(newEl);
  });

promise2
  .then(() => {
    const newEl = document.createElement('div');

    newEl.className = 'message';
    newEl.innerText = 'Promise was resolved!';
    document.body.append(newEl);
  })
  .catch(() => {
    const newEl = document.createElement('div');

    newEl.classList.add('message', 'error-message');
    newEl.innerText = 'Promise was rejected!';
    document.body.append(newEl);
  });
