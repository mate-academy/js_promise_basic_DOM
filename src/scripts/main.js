'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise timed out'));
  }, 3000);
});

promise1.then(() => {
  const divResolveMessage = document.createElement('div');

  document.body.appendChild(divResolveMessage);
  divResolveMessage.classList.add('message');
  divResolveMessage.textContent = 'Promise was resolved!';
});

promise2.catch(() => {
  const divErrorMessage = document.createElement('div');

  document.body.appendChild(divErrorMessage);
  divErrorMessage.classList.add('message', 'error-message');
  divErrorMessage.textContent = 'Promise was rejected!';
});
