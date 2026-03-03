'use strict';

const logo = document.querySelector('.logo');
const divResolve = document.createElement('div');
const divReject = document.createElement('div');
const body = document.querySelector('body');

divResolve.classList.add('message');
divReject.classList.add('message');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1
  .then((res) => {
    body.appendChild(divResolve);
    divResolve.textContent = res;
  })
  .catch();

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2
  .catch((rej) => {
    body.appendChild(divReject);
    divReject.textContent = 'Promise was rejected!';
    divReject.classList.add('error-message');
  })
  .then();
