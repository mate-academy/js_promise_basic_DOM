'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve('Logo clicked!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Timeout reached!'));
  }, 3000);
});

promise1
  .then(() => {
    const element = document.createElement('div');

    element.classList.add('message');
    element.textContent = 'Promise was resolved!';
    document.body.appendChild(element);
  })
  .catch(() => {
    const element = document.createElement('div');

    element.classList.add('message');
    element.classList.add('error-message');
    element.textContent = 'Promise was rejected!';
    document.body.appendChild(element);
  });

promise2
  .then(() => {
    const element = document.createElement('div');

    element.classList.add('message');
    element.textContent = 'Promise was resolved!';
    document.body.appendChild(element);
  })
  .catch(() => {
    const element = document.createElement('div');

    element.classList.add('message');
    element.classList.add('error-message');
    element.textContent = 'Promise was rejected!';
    document.body.appendChild(element);
  });
