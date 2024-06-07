'use strict';

const logo = document.querySelector('.logo');

const div = document.createElement('div');

div.classList.add('message');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then((message) => {
  document.body.append(div);

  div.innerHTML = message;
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((error) => {
  div.classList.add('error-message');
  document.body.append(div);

  div.innerHTML = error;
});
