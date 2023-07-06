'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise(resolve => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise1
  .then(() => {
    const success = document.createElement('div');

    success.classList.add('message');
    success.innerText = 'Promise was resolved!';

    document.body.append(success);
  });

promise2
  .catch(() => {
    const error = document.createElement('div');

    error.className = 'message error-message';
    error.innerText = 'Promise was rejected!';

    document.body.append(error);
  });
