'use strict';
// write your code here

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.append(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout error'));
  }, 3000);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.classList.add('error-message');
  div.textContent = 'Promise was rejected!';
  document.body.append(div);
});
