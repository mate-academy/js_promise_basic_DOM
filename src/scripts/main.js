'use strict';

const body = document.querySelector('body');

function printMessage(stat, message) {
  body.insertAdjacentHTML('beforeend', `
    <div class="${stat}">${message}</div>
  `);
}

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', e => {
    if (!e.target.closest('.logo')) {
      return;
    }
    resolve();
  });
});

promise1
  .then(() => {
    printMessage('message', 'Promise was resolved!');
  })
  .catch(() => {
    printMessage('error-message', 'Promise was rejected!');
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise2
  .then(() => {
    printMessage('message', 'Promise was resolved!');
  })
  .catch(() => {
    printMessage('error-message', 'Promise was rejected!');
  });
