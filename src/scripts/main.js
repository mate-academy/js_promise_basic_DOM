'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1.then((data) => {
  const newDiv = document.createElement('div');

  newDiv.className = 'message';
  newDiv.innerText = data;

  document.body.append(newDiv);
});

promise2.catch((error) => {
  const newDiv = document.createElement('div');

  newDiv.className = 'message error-message';
  newDiv.innerText = error;

  document.body.append(newDiv);
});
