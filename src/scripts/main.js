'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    const success = document.createElement('div');

    success.className = 'message';
    success.textContent = 'Promise was resolved!';

    document.body.append(success);
  });
});

const promise2 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    const error = document.createElement('div');

    error.className = 'error-message';
    error.textContent = 'Promise was rejected!';

    document.body.append(error);
  });
});

promise1();
promise2();
