'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve('ready');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

const pageBody = document.body;

promise1.then(
  (result) => {
    const newDiv = document.createElement('div');

    newDiv.classList.add('message');
    newDiv.textContent = 'Promise was resolved!';
    pageBody.appendChild(newDiv);
  },

  (error) => alert(error),
);

promise2.catch((error) => {
  const newErrorDiv = document.createElement('div');

  newErrorDiv.classList.add('message', 'error-message');
  newErrorDiv.textContent = error.message;
  pageBody.appendChild(newErrorDiv);
});
