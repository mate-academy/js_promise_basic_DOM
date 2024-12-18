'use strict';
const resolved = document.createElement('div');

resolved.classList.add('message');
resolved.textContent = 'Promise was resolved!';

const rejected = document.createElement('div');

rejected.classList.add('message');
rejected.classList.add('message-error');
rejected.textContent = 'Promise was rejected!';


const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    resolve('Success');
    document.body.appendChild(resolved);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'));
    document.body.appendChild(rejected);
  }, 3000);
});


alert(promise1);
alert(promise2);
