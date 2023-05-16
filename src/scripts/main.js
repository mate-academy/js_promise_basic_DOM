'use strict';

// write your code here
const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 3000);
});

const showMessage = (message, type) => {
  const className = (type === 'error') ? 'error-message' : 'message';
  const html = `<div class="${className}">${message}</div>`;

  document.body.insertAdjacentHTML('beforeend', html);
};

promise1
  .then(() => {
    showMessage('Promise was resolved!');
  })
  .catch(() => {
    showMessage('Promise was rejected!', ['error-message']);
  });

promise2
  .then(() => {
    showMessage('Promise was resolved!');
  })
  .catch(() => {
    showMessage('Promise was rejected!', ['error-message']);
  });
