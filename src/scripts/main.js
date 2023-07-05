'use strict';

const button = document.querySelector('.logo');
const message = document.createElement('div');
const body = document.body;

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
  .then(success => {
    message.className = 'message';
    message.innerText = success;
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
