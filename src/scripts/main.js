'use strict';

const logo = document.querySelector('.logo');
const divNotification = document.createElement('div');

divNotification.classList.add('message');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', e => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

promise1.then(() => {
  divNotification.innerText = 'Promise was resolved!';
  document.body.append(divNotification);
});

promise2.catch(() => {
  divNotification.classList.add('error-message');
  divNotification.innerText = 'Promise was rejected!';
  document.body.append(divNotification);
});
