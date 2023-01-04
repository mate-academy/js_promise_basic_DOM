'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  resolve('Promise was resolved!');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

logo.addEventListener('click', () => {
  promise1.then(res => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.innerText = res;

    body.appendChild(div);
  });
});

promise2.catch(error => {
  const div = document.createElement('div');

  div.classList.add('error-message');
  div.innerText = error.message;

  body.appendChild(div);
});
