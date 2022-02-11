'use strict';

// write your code here
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise(function(resolve) {
  logo.addEventListener('click', () => {
    resolve(`Promise was resolved!`);
  });
});

const promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(new Error(`Promise was rejected!`));
  }, 3000);
});

promise1.then(() => {
  const div = document.createElement('div');

  div.classList = 'message';
  div.innerText = `Promise was resolved!`;
  body.append(div);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.classList = 'error-message';
  div.innerText = `Promise was rejected!`;
  body.append(div);
});
