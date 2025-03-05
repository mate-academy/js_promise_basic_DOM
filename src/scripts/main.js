'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  logo.onclick = () => {
    resolve();
  };
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';

  body.append(div);
});

promise2.catch((errorMessage) => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = errorMessage;

  body.append(div);
});
