'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const divEl = document.createElement('div');

  divEl.classList.add('message');
  divEl.textContent = 'Promise was resolved!';
  document.body.append(divEl);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch(() => {
  const divEl = document.createElement('div');

  divEl.classList.add('message', 'error-message');
  divEl.textContent = 'Promise was rejected!';
  document.body.append(divEl);
});
