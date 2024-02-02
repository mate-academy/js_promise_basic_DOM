'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

promise1
  .then(() => {
    const el = document.createElement('div');

    el.classList.add('message');

    el.innerText = 'Promise was resolved';

    document.body.appendChild(el);
  })
  .catch(() => {});

promise2
  .then(() => {})
  .catch(() => {
    const el = document.createElement('div');

    el.classList.add('message');
    el.classList.add('error-message');

    el.innerText = 'Promise was rejected!';

    body.appendChild(el);
  });
