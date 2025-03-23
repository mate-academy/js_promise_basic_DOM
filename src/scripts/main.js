'use strict';

const logo = document.querySelector('.logo');

let isResolved = false;

const promis01 = new Promise((resolve, reject) => {
  logo.addEventListener('click', (e) => {
    isResolved = true;
    resolve();
  });
});

promis01.then(() => {
  logo.classList.add('message');
  logo.textContent = 'Promise was resolved!';
});

const promis02 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!isResolved) {
      reject(new Error('Promise was rejected because of timeout'));
    }
  }, 3000);
});

promis02.catch(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.textContent = 'Обіцянку відхилено!';
  document.body.append(div);
});
