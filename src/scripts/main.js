'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error());
  }, 3000);
});

promise1
  .then(() => {
    const blok = document.createElement('div');

    blok.classList.add('message');
    blok.innerText = 'Promise was resolved!';
    body.append(blok);
  })
  .catch(() => {
    const blok = document.createElement('div');

    blok.classList.add('message error-message');
    blok.innerText = 'Promise was rejected!';
    body.append(blok);
  });

promise2
  .then(() => {
    const blok = document.createElement('div');

    blok.classList.add('message');
    blok.innerText = 'Promise was resolved!';
    body.append(blok);
  })
  .catch(() => {
    const blok = document.createElement('div');

    blok.classList.add('message');
    blok.classList.add('error-message');
    blok.innerText = 'Promise was rejected!';
    body.append(blok);
  });
