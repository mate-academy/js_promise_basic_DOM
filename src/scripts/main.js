'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((error) => {
  const division = document.createElement('div');

  division.classList.add('error-message');
  division.textContent = error.message;
  document.body.appendChild(division);
});

logo.addEventListener('click', () => {
  const promise1 = new Promise((resolve, reject) => {
    resolve('Promise was resolved!');
  });

  promise1.then((result) => {
    const division = document.createElement('div');

    division.textContent = result;
    document.body.appendChild(division);
  });
});
