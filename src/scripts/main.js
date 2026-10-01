'use strict';

const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve(logo);
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  const notificationSuccess = document.createElement('div');

  notificationSuccess.classList.add('message');
  notificationSuccess.textContent = 'Promise was resolved!';
  body.append(notificationSuccess);
});

promise1.catch(() => {
  const notificationError = document.createElement('div');

  notificationError.classList.add('message', 'error-message');
  notificationError.textContent = 'Promise was rejected!';
  body.append(notificationError);
});

promise2.then(() => {
  const notificationSuccess = document.createElement('div');

  notificationSuccess.classList.add('message');
  notificationSuccess.textContent = 'Promise was resolved!';
  body.append(notificationSuccess);
});

promise2.catch(() => {
  const notificationError = document.createElement('div');

  notificationError.classList.add('message', 'error-message');
  notificationError.textContent = 'Promise was rejected!';
  body.append(notificationError);
});
