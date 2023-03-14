'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', resolve);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error(),);
  }, 3000);
});

promise1
  .then(() => {
    return handler('Promise was resolved!', 'message');
  });

promise2
  .catch(() => {
    return handler('Promise was rejected!', 'error-message');
  });

function handler(message, type) {
  const success = document.createElement('div');

  success.classList.add(type, 'message');
  success.textContent = message;
  body.append(success);
};
