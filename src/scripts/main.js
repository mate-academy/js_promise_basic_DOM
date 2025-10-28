'use strict';

// write your code here

const promise1 = new Promise((resolve) => {
  document.querySelector('.logo').addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

function promiseRes() {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
}

function promiseRej() {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
}

promise1
  .then(() => {
    promiseRes();
  })
  .catch(() => {
    promiseRej();
  });

promise2
  .then(() => {
    promiseRes();
  })
  .catch(() => {
    promiseRej();
  });
