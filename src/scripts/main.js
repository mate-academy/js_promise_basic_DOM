'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    setTimeout(() => {
      reject(new Error('PROMISE FAILED'));
    }, 3000);
  });
});

promise1.then(() => {
  const divResolveMessage = document.createElement('div');

  document.body.appendChild(divResolveMessage);
  divResolveMessage.classList.add('message');
  divResolveMessage.textContent = 'Promise was resolved!';
});

promise2.catch(() => {
  const divErrorMessage = document.createElement('div');

  document.body.appendChild(divErrorMessage);
  divErrorMessage.classList.add('message', 'error-message');
  divErrorMessage.textContent = 'Promise was rejected!';
});
