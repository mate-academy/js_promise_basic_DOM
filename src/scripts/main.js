'use strict';

const firstPromise = new Promise((resolve) => {
  const logo = document.getElementsByClassName('logo')[0];

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

firstPromise.then((value) => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = value;

  document.body.append(div);
});

secondPromise.catch((err) => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = err.message;

  document.body.append(div);
});
