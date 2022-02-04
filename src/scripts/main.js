'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    const div = document.createElement('div');

    div.className = 'message';
    div.innerText = 'Promise was resolved!';
    body.append(div);

    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise(((resolve) => {}, (reject) => {
  const div = document.createElement('div');

  div.className = 'error-message';
  div.innerText = 'Promise was rejected!';

  setTimeout(() => {
    body.append(div);
  }, 3000);

  reject('Promise was rejected!');
}));

promise1.then();
promise2.catch();
