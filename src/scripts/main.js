'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1
  .then(result => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.innerText = result;
    document.body.appendChild(div);
  })
  .catch(error => {
    const div = document.createElement('div');

    div.classList.add('error-message');
    div.innerText = error;
    document.body.appendChild(div);
  });

promise2
  .then(result => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.innerText = result;
    document.body.appendChild(div);
  })
  .catch(error => {
    const div = document.createElement('div');

    div.classList.add('error-message');
    div.innerText = error;
    document.body.appendChild(div);
  });
