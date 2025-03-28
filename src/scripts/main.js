'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise1.then((data) => {
  const div = document.createElement('div');

  div.classList.add('message');

  div.innerText = data;

  document.body.append(div);
});

promise2.catch((err) => {
  const div = document.createElement('div');

  div.classList.add('error-message');

  div.innerText = err;

  document.body.append(div);
});
