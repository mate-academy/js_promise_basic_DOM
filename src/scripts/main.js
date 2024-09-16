'use strict';

const body = document.querySelector('body');
const logo = body.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    setTimeout(reject, 3000);
  });
});

promise1
  .then(message => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = message;
    body.append(div);
  });

promise2
  .catch(() => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = 'Promise was rejected!';
    body.append(div);
  });
