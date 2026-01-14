'use strict';

// write your code here
const body = document.querySelector('body');

const success = () => {
  const messSuccess = document.createElement('div');

  messSuccess.classList.add('message');
  messSuccess.textContent = 'Promise was resolved!';
  body.append(messSuccess);
};

const error = () => {
  const messError = document.createElement('div');

  messError.classList.add('message', 'error-message');

  messError.textContent = 'Promise was rejected!';
  body.append(messError);
};

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    success();
  })
  .catch(() => {
    error();
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2
  .then(() => {
    success();
  })
  .catch(() => {
    error();
  });
