'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(() => {
    const resolveMessage = document.createElement('div');

    resolveMessage.className = 'message';
    resolveMessage.textContent = 'Promise was resolved!';

    document.querySelector('body').append(resolveMessage);
  });

promise2
  .catch(() => {
    const rejectMessage = document.createElement('div');

    rejectMessage.className = 'message error-message';
    rejectMessage.textContent = 'Promise was rejected!';

    document.querySelector('body').append(rejectMessage);
  });
