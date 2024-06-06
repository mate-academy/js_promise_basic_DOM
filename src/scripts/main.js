'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error()), 3000);
});

const divResolve = document.createElement('div');

divResolve.classList.add('message');
divResolve.innerText = 'Promise was resolved!';

const divReject = document.createElement('div');

divReject.classList.add('message', 'error-message');
divReject.innerText = 'Promise was rejected!';

promise1
  .then(() => {
    document.body.append(divResolve);
  })
  .catch(() => {
    document.body.append(divReject);
  });

promise2
  .then(() => {
    document.body.append(divResolve);
  })
  .catch(() => {
    document.body.append(divReject);
  });
