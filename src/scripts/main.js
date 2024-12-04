'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

function clickLogo(resolved) {
  logo.addEventListener('click', () => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = resolved;
    body.appendChild(div);
  });
}

function reject(error) {
  setTimeout(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.classList.add('error-message');
    div.textContent = error;
    body.appendChild(div);
  }, 3000);
}

// eslint-disable-next-line no-unused-vars
const promise1 = Promise.resolve('Promise was resolved!').then((resolved) => {
  clickLogo(resolved);
});

// eslint-disable-next-line prefer-promise-reject-errors, no-unused-vars
const promise2 = Promise.reject('Promise was rejected!').catch((error) => {
  reject(error);
});
