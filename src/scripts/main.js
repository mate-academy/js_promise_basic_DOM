'use strict';

// write your code here
const logo = document.querySelector('.logo');
const div = document.createElement('div');
const divs = document.createElement('div');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise1.then(() => {
  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
});

promise2.catch(() => {
  divs.classList.add('message');
  divs.classList.add('error-message');
  divs.textContent = 'Promise was rejected!';
  document.body.appendChild(divs);
});
