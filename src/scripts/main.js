'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');
const messageResolve = document.createElement('div');

messageResolve.classList.add('message');
messageResolve.textContent = 'Promise was resolved!';

const messageReject = document.createElement('div');

messageReject.classList.add('error-message');
messageReject.textContent = 'Promise was rejected!';

const promise = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });

  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise
  .then(() => {
    body.append(messageResolve);
  })
  .catch(() => {
    body.append(messageReject);
  });
