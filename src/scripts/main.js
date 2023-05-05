'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(error);
  }, 3000);
});

const success = () => {
  const div = document.createElement('div');

  div.className = 'message';
  div.textContent = `Promise was resolved!`;
  document.body.appendChild(div);
};

const error = () => {
  const div = document.createElement('div');

  div.className = 'message error-message';
  div.textContent = `Promise was rejected!`;
  document.body.appendChild(div);
};

promise1
  .then(() => {
    success();
  })
  .catch(() => {
    error();
  });

promise2
  .then(() => {
    success();
  })
  .catch(() => {
    error();
  });
