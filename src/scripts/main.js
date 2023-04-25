'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const message = document.createElement('div');

message.classList.add('message');

promise1
  .then(result => {
    message.innerHTML = result;
    document.body.appendChild(message);
  })
  .catch(error => {
    message.classList.add('error-message');
    message.innerHTML = error;
    document.body.appendChild(message);
  });

promise2
  .catch(error => {
    message.classList.add('error-message');
    message.innerHTML = error;
    document.body.appendChild(message);
  });
