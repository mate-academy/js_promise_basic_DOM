'use strict';

const logo = document.querySelector('.logo');
const message = document.createElement('div');
const errorMessage = document.createElement('div');

message.classList.add('message');
errorMessage.classList.add('message', 'error-message');
message.innerHTML = 'Promise was resolved!';
errorMessage.innerHTML = 'Promise was rejected!';

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected due to timeout'));
  }, 3000);
});

promise1
  .then(() => {
    document.body.append(message);
  })
  .catch(() => {
    document.body.append(errorMessage);
  });

promise2
  .then(() => {
    document.body.append(message);
  })
  .catch(() => {
    document.body.append(errorMessage);
  });
