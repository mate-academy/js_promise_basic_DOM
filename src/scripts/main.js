'use strict';

const logo = document.querySelector('h1');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

const successHandle = () => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
};

const errorHandle = () => {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
};

promise1.then(successHandle).catch(errorHandle);
promise2.then(successHandle).catch(errorHandle);
