'use strict';

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => resolve());
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise rejected')), 3000);
});

promise1
  .then(() => {
    const text = document.createElement('div');

    text.classList.add('message');
    text.textContent = 'Promise was resolved!';
    document.body.append(text);
  })
  .catch(() => {
    const text = document.createElement('div');

    text.classList.add('message');
    text.classList.add('error-message');
    text.textContent = 'Promise was rejected!';
    document.body.append(text);
  });

promise2
  .then(() => {
    const text = document.createElement('div');

    text.classList.add('message');
    text.textContent = 'Promise was resolved!';
    document.body.append(text);
  })
  .catch(() => {
    const text = document.createElement('div');

    text.classList.add('message');
    text.classList.add('error-message');
    text.textContent = 'Promise was rejected!';
    document.body.append(text);
  });
