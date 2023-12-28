'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
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
  const created = document.createElement('div');

  created.className = 'message';
  created.innerText = 'Promise was resolved!';

  document.body.appendChild(created);
};

const isError = () => {
  const created = document.createElement('div');

  created.className = 'message error-message';
  created.innerText = 'Promise was rejected!';
  document.body.appendChild(created);
};

promise1
  .then(() => isSuccess())
  .catch(() => isError());

promise2
  .then(() => isSuccess())
  .catch(() => isError());
