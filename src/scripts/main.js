'use strict';

// write your code here

const logo = document.querySelector('.logo');
const newDiv = document.createElement('div');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve(`Promise was resolved!`);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(`Promise was rejected!`));
  }, 3000);
});

promise1.then((result) => {
  newDiv.textContent = result;
  newDiv.classList.add('message');
  document.body.appendChild(newDiv);
});

promise2.catch((error) => {
  newDiv.classList.add('message', 'error-message');
  newDiv.textContent = error.message;
  document.body.appendChild(newDiv);
});
