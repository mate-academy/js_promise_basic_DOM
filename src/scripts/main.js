'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

promise1.then(value => {
  const div = document.createElement('div');

  div.className = 'message';
  div.innerText = value;

  document.body.append(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch(err => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.innerText = err.message;

  document.body.append(div);
});
