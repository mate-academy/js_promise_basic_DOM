'use strict';

// write your code here

const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise was rejected!');
  }, 3000);
});

promise1
  .then((successData) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = successData;
    body.appendChild(div);
  })
  .catch((errorData) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.classList.add('error-message');
    div.textContent = errorData;
    body.appendChild(div);
  });

promise2
  .then((successData) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = successData;
    body.appendChild(div);
  })
  .catch((errorData) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.classList.add('error-message');
    div.textContent = errorData;
    body.appendChild(div);
  });
