'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

[promise1, promise2].forEach((promise) => {
  promise
    .then(() => {
      const div = document.createElement('div');

      div.className = 'message';
      div.textContent = 'Promise was resolved!';
      document.body.appendChild(div);
    })
    .catch(() => {
      const div = document.createElement('div');

      div.className = 'message error-message';
      div.textContent = 'Promise was rejected!';
      document.body.appendChild(div);
    });
});
