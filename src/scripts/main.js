'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  const error = 'Promise was rejected!';

  setTimeout(() => {
    reject(error);
  }, 3000);
});

promise1.then((message) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.setAttribute('class', 'message');
  div.textContent = message;
  body.append(div);
});

promise2.catch((message) => {
  const body = document.querySelector('body');
  const div = document.createElement('div');

  div.setAttribute('class', 'message error-message');
  div.textContent = message;
  body.append(div);
});
