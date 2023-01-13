'use strict';

// write your code here
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    const inputResolve = document.createElement('div');

    inputResolve.classList.add('message');
    inputResolve.innerHTML = 'Promise was resolved!';
    body.append(inputResolve);
    resolve(inputResolve);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const inputReject = document.createElement('div');

    inputReject.classList.add('error-message');
    inputReject.classList.add('message');
    inputReject.innerHTML = `Promise was rejected!`;
    reject(inputReject);
  }, 3000);
});

promise1.then(data => {
  body.append(data);
});

promise2.catch(data => {
  body.append(data);
});
