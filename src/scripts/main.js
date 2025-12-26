'use strict';

const body = document.body;
const logo = body.querySelector('.logo');

const successHandler = () => {
  const div = document.createElement('div');

  div.className = 'message';
  div.innerText = 'Promise was resolved!';

  body.append(div);
};

const errorHandler = () => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.innerText = 'Promise was rejected!';

  body.append(div);
};

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1.then(successHandler).catch(errorHandler);
promise2.then(successHandler).catch(errorHandler);
