'use strict';

const message = document.createElement('div');
const errorMessage = document.createElement('div');

message.classList.add('message');
message.textContent = 'Promise was resolved!';
errorMessage.classList.add('error-message');
errorMessage.textContent = 'Promise was rejected!';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
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
