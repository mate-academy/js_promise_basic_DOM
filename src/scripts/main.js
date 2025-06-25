'use strict';

const logo = document.body.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    const divMessage = document.createElement('div');

    divMessage.classList.add('message');
    divMessage.textContent = 'Promise was resolved!';
    document.body.appendChild(divMessage);
  })
  .catch(() => {
    const divError = document.createElement('div');

    divError.classList.add('error-message');
    divError.textContent = 'Promise was rejected!';
    document.body.appendChild(divError);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Some reason'));
  }, 3000);
});

promise2
  .then(() => {
    const divMessage = document.createElement('div');

    divMessage.classList.add('message');
    divMessage.textContent = 'Promise was resolved!';
    document.body.appendChild(divMessage);
  })
  .catch(() => {
    const divError = document.createElement('div');

    divError.classList.add('error-message');
    divError.textContent = 'Promise was rejected!';
    document.body.appendChild(divError);
  });
