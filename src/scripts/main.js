'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', function () {
    resolve();
  });
});

promise1.then(function () {
  const div = document.createElement('div');

  div.classList.add('message');
  div.innerText = 'Promise was resolved!';
  document.body.append(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected'));
  }, 3000);
});

promise2.catch(function () {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.innerText = 'Promise was rejected!';
  document.body.append(div);
});
