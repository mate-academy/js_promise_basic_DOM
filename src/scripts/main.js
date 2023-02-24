'use strict';

const mateLogo = document.querySelector('.logo');

function createMessage(message, type = '') {
  const div = document.createElement('div');

  div.innerHTML = `<div class="message ${type}">${message}</div>`;
  document.body.append(div);
}

const promise1 = new Promise((resolve) => {
  mateLogo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Promise was rejected!')), 3000);
});

promise1
  .then(() => {
    createMessage('Promise was resolved!');
  });

promise2
  .catch((error) => {
    createMessage(error, 'error-message');
  });
