'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const success = document.createElement('div');
const error = document.createElement('div');

success.className = 'message';
success.innerText = 'Promise was resolved!';
error.className = 'error-message';
error.innerText = 'Promise was rejected!';

function promise1() {
  return new Promise(resolve => {
    logo.addEventListener('click', event => {
      resolve();
    });
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(), 2900);
  });
}

promise1()
  .then((result1) => body.append(success))
  .catch((result2) => body.append(error));

promise2()
  .then((result1) => body.append(success))
  .catch((result2) => body.append(error));
