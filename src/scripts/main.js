'use strict';

// write your code here

const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const message = document.createElement('DIV');

message.classList.add('message');

const promise = new Promise((resolve, reject) => {
  logo.onclick = () => {
    resolve();
  };

  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise
  .then(() => {
    message.innerText = 'Promise was resolved!';
  })
  .catch(() => {
    message.classList.add('error-message');
    message.innerText = 'Promise was rejected!';
  })
  .finally(() => body.prepend(message));
