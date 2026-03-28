'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
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

const promise2 = new Promise((resolve, reject) => {
  // eslint-disable-next-line prefer-promise-reject-errors
  setTimeout(() => reject(), 3000);
});

promise2
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
