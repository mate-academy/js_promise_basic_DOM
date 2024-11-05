'use strict';

// write your code here
const logo = document.getElementsByClassName('logo')[0];
const message = document.createElement('div');

message.className = 'message';

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

Promise.race([promise1, promise2])
  .then((success) => (message.textContent = success))
  .catch((err) => {
    message.classList.add('error-message');
    message.textContent = err.message;
  })
  .finally(() => document.body.append(message));
