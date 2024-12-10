'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const div = document.createElement('div');

  div.innerHTML = 'Promise was resolved!';
  div.className = 'message';
  document.body.append(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000);
});

promise2.catch(() => {
  const div = document.createElement('div');

  div.innerHTML = 'Promise was rejected!';
  div.className = 'message error-message';
  document.body.append(div);
});
