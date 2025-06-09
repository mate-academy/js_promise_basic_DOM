'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong'));
  }, 3000);
});

function successHandler() {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

function errorHandler() {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
