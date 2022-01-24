'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const succes = document.createElement('div');
const error = document.createElement('div');

succes.className = 'message';
succes.innerHTML = 'Promise was resolved!';
error.className = 'error-message';
error.innerHTML = 'Promise was rejected!';

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve(
      body.append(succes)
    );
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error(body.append(error))), 3000);
});

promise1.then();
promise2.catch();
