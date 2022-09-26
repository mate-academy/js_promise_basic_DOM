'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const divSuccess = document.createElement('div');
const divError = document.createElement('div');

divSuccess.classList.add('message');
divError.classList.add('error-message');
divSuccess.textContent = 'Promise was resolved!';
divError.textContent = 'Promise was rejected!';

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

promise1
  .then(result => body.append(divSuccess))
  .catch(er => body.append(divError));

promise2
  .then(result => body.append(divSuccess))
  .catch(er => body.append(divError));
