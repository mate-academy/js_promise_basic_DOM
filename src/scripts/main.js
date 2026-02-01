'use strict';

// write your code here
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (!logo) {
    reject(new Error('Logo element not found'));

    return;
  }

  logo.addEventListener('click', (ev) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout expired'));
  }, 3000);
});

promise1
  .then(() => {
    const succes = document.createElement('div');

    succes.classList.add('message');
    succes.textContent = 'Promise was resolved!';
    document.body.appendChild(succes);
  })
  .catch(() => {
    const error = document.createElement('div');

    error.classList.add('message', 'error-message');
    error.textContent = 'Promise was rejected!';
    document.body.appendChild(error);
  });

promise2
  .then(() => {
    const succes = document.createElement('div');

    succes.classList.add('message');
    succes.textContent = 'Promise was resolved!';
    document.body.appendChild(succes);
  })
  .catch(() => {
    const error = document.createElement('div');

    error.classList.add('message', 'error-message');
    error.textContent = 'Promise was rejected!';
    document.body.appendChild(error);
  });
