'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

const promise2 = new Promise((resolve, reject) => {
  // eslint-disable-next-line prefer-promise-reject-errors
  setTimeout(() => reject(), 3000);
});

function createSuccessMessage() {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';

  body.appendChild(message);
}

function createErrorMessage() {
  const message = document.createElement('div');

  message.classList.add('message', 'error-message');
  message.textContent = 'Promise was rejected!';

  body.appendChild(message);
}

promise1.then(createSuccessMessage).catch(createErrorMessage);
promise2.then(createSuccessMessage).catch(createErrorMessage);
