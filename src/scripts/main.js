'use strict';

// write your code here
function success() {
  const message = document.createElement('div');

  message.textContent = 'Promise was resolved!';
  document.querySelector('body').appendChild(message);
}

function error() {
  const message = document.createElement('div');

  message.textContent = 'Promise was rejected!';
  document.querySelector('body').appendChild(message);
}

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('h1');

  logo.addEventListener('click', () => {
      resolve('success');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected'));
    error();
  }, 3000);
});

Promise.race([promise1, promise2])
  .then(() => {
    success();
  })
  .catch(() => {
    error();
  });
