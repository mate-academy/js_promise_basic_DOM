'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', e => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

promise1.then(() => {
  const message = document.createElement('div');

  message.classList.add('message');

  message.textContent = 'Promise was resolved!';

  document.body.append(message);
});

promise2.catch(() => {
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('error-message');

  errorMessage.textContent = 'Promise was rejected!';

  document.body.append(errorMessage);
});

// write your code here
