'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

function successHandler(message) {
  const massege = document.createElement('div');

  massege.classList = 'message';
  massege.textContent = message;
  body.append(massege);
}

function errorHahandler(message) {
  const massege = document.createElement('div');

  massege.classList = 'error-message';
  massege.textContent = message;
  body.append(massege);
}

promise1.then(successHandler);
promise2.catch(errorHahandler);
