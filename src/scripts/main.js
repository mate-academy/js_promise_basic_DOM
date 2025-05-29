'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    if (e.target) {
      const div = document.createElement('div');

      div.classList.add('message');
      div.textContent = 'Promise was resolved!';
      resolve(body.appendChild(div));
    } else {
      reject(new Error('Logo wasn`t clicked'));
    }
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.classList.add('error-message');
    div.textContent = 'Promise was rejected!';
    reject(body.appendChild(div));
  }, 3000);
});

promise1.then(
  (logClick) => logClick,
  (error) => error,
);

promise2.then(
  (success) => success,
  (error) => error,
);
