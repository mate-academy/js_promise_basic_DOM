'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Some text'));
  }, 3000);
});

promise1.then(
  () => {
    const block = document.createElement('div');

    block.classList.add('message');
    block.textContent = 'Promise was resolved!';
    body.append(block);
  },
  () => {
    const block = document.createElement('div');

    block.classList.add('message error-message');
    block.textContent = 'Promise was rejected!';
    body.append(block);
  },
);

promise2
  .then(() => {
    const block = document.createElement('div');

    block.classList.add('message');
    block.textContent = 'Promise was resolved!';
    body.append(block);
  })
  .catch(() => {
    const block = document.createElement('div');

    block.classList.add('message', 'error-message');
    block.textContent = 'Promise was rejected!';
    body.append(block);
  });
