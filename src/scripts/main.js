'use strict';

const logo = document.querySelector('.logo');

function showNotification(message, cls) {
  const div = document.createElement('div');
  const body = document.querySelector('body');

  div.classList.add(cls);
  div.textContent = message;
  body.append(div);
};

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() =>
    reject(new Error('Promise was rejected!')), 3000);
});

promise1.then(result => {
  showNotification(result, 'message');
});

promise2.catch(result => {
  showNotification(result, 'error-message');
});
