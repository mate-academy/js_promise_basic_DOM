'use strict';

const body = document.querySelector('body');
const successDiv = document.createElement('div');
const errorDiv = document.createElement('div');
const logo = document.querySelector('.logo');

successDiv.classList.add('message');
successDiv.innerText = 'Promise was resolved!';
errorDiv.classList.add('message');
errorDiv.classList.add('error-message');
errorDiv.innerText = 'Promise was rejected!';

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve(body.append(successDiv));
  });
});

const promise2 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    setTimeout(() => {
      reject(body.append(errorDiv));
    }, 3000);
  });
});

promise1.then();
promise2.catch();
