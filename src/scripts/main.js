'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('h1.logo');

const promise1 = new Promise((resolve, reject) => {
  document.addEventListener('click', (e) => {
    if (e.target === logo) {
      resolve();
    }
  });
});

promise1.then(
  () => success(),
  () => error(),
);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected after 3 seconds'));
  }, 3000);
});

promise2.then(
  () => success(),
  () => error(),
);

function success() {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  body.append(div);
}

function error() {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.textContent = 'Promise was rejected!';
  body.append(div);
}
