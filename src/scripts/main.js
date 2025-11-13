'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  const promise1 = new Promise((resolve) => {
    const divEl = document.createElement('div');

    divEl.classList.add('message');
    divEl.textContent = 'Promise was resolved!';
    resolve(divEl);
  });

  promise1.then((el) => document.querySelector('body').appendChild(el));
});

const promise2 = new Promise((resolve, reject) => {
  const divEl = document.createElement('div');

  divEl.classList.add('message');
  divEl.classList.add('error-message');
  divEl.textContent = 'Promise was rejected!';

  setTimeout(() => {
    reject(divEl);
  }, 3000);
});

promise2.catch((el) => document.querySelector('body').appendChild(el));
