'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', async () => {
  const promise1 = new Promise((resolve, reject) => {
    resolve('Promise was resolved!');
  });

  const result = await promise1;

  const division = document.createElement('div');
  division.classList.add('message');

  division.textContent = result;
  document.body.appendChild(division);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((error) => {
  const division = document.createElement('div');
  division.classList.add('message');

  division.classList.add('error-message');
  division.textContent = error.message;
  document.body.appendChild(division);
});
