'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  resolve('Promise was resolved!');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!').message);
  }, 3000);
});

logo.addEventListener('click', () => {
  promise1.then((value) => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = value;

    document.body.insertAdjacentHTML('beforeend', div.outerHTML);
  });
});

promise2
  .then((value) => {})
  .catch((error) => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = error;

    document.body.insertAdjacentHTML('beforeend', div.outerHTML);
  });
