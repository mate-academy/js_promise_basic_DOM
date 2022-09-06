'use strict';

// write your code here
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

function successHandler(data) {
  body.insertAdjacentHTML('beforeend', `
    <div class="message">${data}</div>
  `);
};

function errorHandler(error) {
  body.insertAdjacentHTML('beforeend', `
    <div class="error-message">${error.message}</div>
  `);
}

promise1.then(successHandler, errorHandler);
promise2.then(successHandler, errorHandler);
