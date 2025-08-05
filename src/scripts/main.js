'use strict';

const image = document.querySelector('.logo');

const promis1 = new Promise((resolve) => {
  image.addEventListener('click', (e) => {
    resolve();
  });
});

const promis2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected')), 3000);
});

promis1.then(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = 'Promise was resolved!';
  document.body.appendChild(div);
});

promis2.catch(() => {
  const div = document.createElement('div');

  div.classList.add('message');
  div.classList.add('error-message');
  div.textContent = 'Promise was rejected!';
  document.body.appendChild(div);
});
