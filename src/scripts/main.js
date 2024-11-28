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

const createMessage = (text, isError = false) => {
  const div = document.createElement('div');

  div.classList.add('message');

  if (isError) {
    div.classList.add('error-message');
  }
  div.textContent = text;
  document.body.appendChild(div);
};
const successHandle = () => {
  createMessage('Promise was resolved!');
};

const errorHandle = () => {
  createMessage('Promise was rejected!', true);
};

promise1.then(successHandle).catch(errorHandle);
promise2.then(successHandle).catch(errorHandle);
