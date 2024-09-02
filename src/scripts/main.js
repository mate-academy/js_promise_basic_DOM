'use strict';

const logo = document.querySelector('.logo');
const message = document.createElement('div');
const body = document.querySelector('body');
let newResult = false;

message.classList.add('message');

const promise1 = new Promise((resolve) => {
  resolve('Promise was resolved!');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (newResult) {
      resolve('Promise was resolved after 3 seconds!');
    } else {
      const err = 'Promise was rejected!';

      reject(err);
    }
  }, 3000);
});

logo.addEventListener('click', () => {
  newResult = true;

  promise1
    .then((result) => {
      message.textContent = result;
      body.appendChild(message);
    })
    .catch(() => {
      message.textContent = 'Promise was rejected!';
      message.classList.add('error-message');
      body.appendChild(message);
    });
});

promise2
  .then((result) => {
    message.textContent = result;
    body.appendChild(message);
  })
  .catch((err) => {
    message.textContent = err;
    message.classList.add('error-message');
    body.appendChild(message);
  });
