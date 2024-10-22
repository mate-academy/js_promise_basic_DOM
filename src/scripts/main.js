'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected after 3 seconds'));
  }, 3000);
});

promise1.then(() => {
  body.appendChild(createResolveEl());
});

promise2.catch(() => {
  body.appendChild(createRejectEl());
});

function createResolveEl() {
  const el = document.createElement('div');

  el.classList.add('message');
  el.textContent = 'Promise was resolved!';

  return el;
}

function createRejectEl() {
  const el = document.createElement('div');

  el.classList.add('message');
  el.classList.add('error-message');
  el.textContent = 'Promise was rejected!';

  return el;
}
