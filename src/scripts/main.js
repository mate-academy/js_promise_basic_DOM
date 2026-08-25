'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  const info = document.createElement('div');

  info.className = 'message';
  info.textContent = 'Promise was resolved!';

  document.body.append(info);
});

promise2.catch(() => {
  const info = document.createElement('div');

  info.className = 'message error-message';
  info.textContent = 'Promise was rejected!';

  document.body.append(info);
});
