'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

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

const success = (message) => {
  const div = document.createElement('div');

  div.className = 'message';

  div.textContent = message;
  body.append(div);
};

const withError = (message) => {
  const div = document.createElement('div');

  div.className = 'message error-message';

  div.textContent = message;
  body.append(div);
};

promise1.then((message) => success(message));
promise2.catch((error) => withError(error));
