'use strict';

// write your code here
const logoEl = document.querySelector('.logo');
const bodyEl = document.querySelector('body');
const divEl = document.createElement('div');

const promise1 = new Promise((resolve, reject) => {
  logoEl.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

promise1.then(() => {
  divEl.classList.add('message');
  divEl.textContent = 'Promise was resolved!';
  bodyEl.append(divEl);
});

promise2.catch(() => {
  divEl.classList.add('error-message');
  divEl.textContent = 'Promise was rejected!';
  bodyEl.append(divEl);
});
