'use strict';

// write your code here
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('First promise was resolved');
  });
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise1.then((text) => {
  const successDiv = document.createElement('div');

  successDiv.classList.add('message');

  successDiv.textContent = text;

  body.append(successDiv);
});

promise2.catch((error) => {
  const successDiv = document.createElement('div');

  successDiv.classList.add('message');
  successDiv.classList.add('error-message');

  successDiv.textContent = error;

  body.append(successDiv);
});
