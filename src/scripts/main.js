'use strict';

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  const promise1 = new Promise((resolve, reject) => {
    const divEl = document.createElement('div');

    divEl.classList.add('message');
    divEl.textContent = 'Promise was resolved!';
    resolve(divEl);

    if (!divEl) {
      reject(new Error('div element don`t created'));
    }
  });

  promise1
    .then((el) => document.querySelector('body').appendChild(el))
    .catch((err) => {document.querySelector('body').appendChild(err)});
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

promise2
  .then((resolve) => {document.querySelector('body').appendChild(resolve);})
  .catch((el) => document.querySelector('body').appendChild(el));
