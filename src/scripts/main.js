'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error);
  }, 3000);
});

const isSuccess = () => {
  const message = document.createElement('div');

  message.className = 'message';
  message.innerText = 'Promise was resolved!';

  document.body.appendChild(message);
};

const isError = () => {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.innerText = 'Promise was rejected!';

  document.body.appendChild(message);
};

promise1
  .then(() => isSuccess())
  .catch(() => isError());

promise2
  .then(() => isSuccess())
  .catch(() => isError());
