'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Success');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
});

promise1
  .then((result) => {
    const body = document.body;
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    body.appendChild(div);
  })
  .catch(() => {
    const body = document.body;
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = 'Promise was rejected!';
    body.appendChild(div);
  });

promise2
  .then((result) => {
    const body = document.body;
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved!';
    body.appendChild(div);
  })
  .catch(() => {
    const body = document.body;
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = 'Promise was rejected!';
    body.appendChild(div);
  });
