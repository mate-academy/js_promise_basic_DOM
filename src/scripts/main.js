'use strict';

function notifyAboutSuccess(message) {
  const div = document.createElement('div');

  div.classList.add('message');
  div.textContent = message;

  document.body.appendChild(div);
}

function notifyAboutError(message) {
  const div = document.createElement('div');

  div.classList.add('message', 'error-message');
  div.textContent = message;

  document.body.appendChild(div);
}

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1
  .then(notifyAboutSuccess)
  .catch((error) => notifyAboutError(error.message));

promise2
  .then(notifyAboutSuccess)
  .catch((error) => notifyAboutError(error.message));
