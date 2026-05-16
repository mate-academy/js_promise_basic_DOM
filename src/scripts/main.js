'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    resolve('Promise was resolved!');
  });
});

const resolveHandler = (data) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = data;
  body.append(div);
};

const rejectHandler = (data) => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.textContent = data.message;
  body.append(div);
};

promise1.then(resolveHandler, rejectHandler);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise2.then(resolveHandler, rejectHandler);
