'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then((eventResult) => {
  const divEl = document.createElement('div');
  const bodyEl = document.querySelector('body');

  divEl.className = 'message';
  divEl.textContent = 'Promise was resolved!';
  bodyEl.append(divEl);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((error) => {
  const divEl = document.createElement('div');
  const bodyEl = document.querySelector('body');

  divEl.classList.add('message', 'error-message');
  divEl.textContent = error.message;
  bodyEl.append(divEl);
});
