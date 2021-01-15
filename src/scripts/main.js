'use strict';

const body = document.querySelector('body');
const btnResolve = document.querySelector('.logo');

const promiseResolve = new Promise(resolve => {
  btnResolve.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promiseResolve.then(result => {
  const el = document.createElement('div');

  el.textContent = result;
  el.classList.add('message');

  body.append(el);
});

promiseReject.catch(error => {
  const el = document.createElement('div');

  el.textContent = error;
  el.classList.add('error-message');

  body.append(el);

  setTimeout(() => {
    el.style.display = 'none';
  }, 3000);
});
