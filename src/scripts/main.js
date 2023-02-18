'use strict';

const logo = document.querySelector('.logo');
const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  success();
}).catch(() => {
  error();
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise2.then(() => {
  success();
}).catch(() => {
  error();
});

function success() {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';
  document.body.append(message);
};

function error() {
  const message = document.createElement('div');

  message.className = 'error-message';
  message.textContent = 'Promise was rejected!';
  document.body.append(message);
};
