'use strict';

const message = document.createElement('div');

message.classList.add('message');

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((result) => {
    message.innerText = result;
    document.body.appendChild(message);
  });

promise2
  .catch((error) => {
    message.classList.add('error-message');
    message.innerText = error;
    document.body.appendChild(message);
  });
