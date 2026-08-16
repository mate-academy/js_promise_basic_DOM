'use strict';

// write your code here
const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', () => {
    resolve('Promise was resolved');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise1
  .then((message) => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = 'Promise was resolved!';
    document.body.append(div);
  })
  .catch(() => {});

promise2
  .then(() => {})
  .catch((message) => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = 'Promise was rejected!';
    document.body.append(div);
  });
