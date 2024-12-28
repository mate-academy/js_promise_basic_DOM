'use strict';

// write your code here
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

function successHandler() {
  const div = document.createElement('div');

  div.setAttribute('class', 'message');
  div.textContent = 'Promise was resolved!';
  document.body.append(div);
}

function errorHandler() {
  const div = document.createElement('div');

  div.setAttribute('class', 'message error-message');
  div.textContent = 'Promise was rejected!';
  document.body.append(div);
}

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
