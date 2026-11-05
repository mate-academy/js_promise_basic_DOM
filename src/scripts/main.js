'use strict';

// write your code here
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

promise1
  .then((message) => {
    const success = document.createElement('div');

    success.className = 'message';
    success.textContent = message;
    document.body.append(success);
  })
  .catch((error) => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message', 'error-message');
    errorMessage.textContent = error.message;
    document.body.append(errorMessage);
  });

promise2
  .then((message) => {
    const success = document.createElement('div');

    success.className = 'message';
    success.textContent = message;
    document.body.append(success);
  })
  .catch((error) => {
    const errorMessage = document.createElement('div');

    errorMessage.classList.add('message', 'error-message');
    errorMessage.textContent = error.message;
    document.body.append(errorMessage);
  });
