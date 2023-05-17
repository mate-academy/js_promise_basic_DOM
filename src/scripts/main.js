'use strict';

const button = document.querySelector('.logo');
const body = document.querySelector('body');
const message = document.createElement('div');

const promise1 = new Promise((resolve, reject) => {
  button.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(result => {
    message.className = 'message';
    message.innerText = result;
    body.append(message);
  })
  .catch();

promise2
  .then()
  .catch(error => {
    message.classList.add('error-message');
    message.innerText = error;
    body.append(message);
  });
