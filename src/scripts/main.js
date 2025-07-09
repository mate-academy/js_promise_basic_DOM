'use strict';

const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then((result) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = result;

    body.append(div);
  })
  .catch((error) => {
    const div = document.createElement('div');

    div.classList.add('message error-message');
    div.textContent = error.message;

    body.append(div);
  });

promise2
  .then((result) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = result;

    body.append(div);
  })
  .catch((error) => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = error.message;

    body.append(div);
  });
