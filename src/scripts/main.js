'use strict';

const logoHeader = document.querySelector('h1.logo');

const promise1 = new Promise((resolve, reject) => {
  logoHeader.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    const newDiv = document.createElement('div');

    newDiv.classList.add('message');
    newDiv.textContent = 'Promise was resolved!';
    document.body.append(newDiv);
  })
  .catch(() => {
    const newDiv = document.createElement('div');

    newDiv.classList.add('message', 'error-message');
    newDiv.textContent = 'Promise was rejected!';
    document.body.append(newDiv);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout'));
  }, 3000);
});

promise2
  .then(() => {
    const newDiv = document.createElement('div');

    newDiv.classList.add('message');
    newDiv.textContent = 'Promise was resolved!';
    document.body.append(newDiv);
  })
  .catch(() => {
    const newDiv = document.createElement('div');

    newDiv.classList.add('message', 'error-message');
    newDiv.textContent = 'Promise was rejected!';
    document.body.append(newDiv);
  });
