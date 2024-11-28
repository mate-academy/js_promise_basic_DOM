'use strict';

const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  if (logo) {
    logo.addEventListener('click', () => {
      resolve();
    });
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

const handleSuccess = () => {
  const message = document.createElement('div');

  message.className = 'message';
  message.textContent = 'Promise was resolved!';

  body.appendChild(message);
};

const handleError = () => {
  const message = document.createElement('div');

  message.className = 'message error-message';
  message.textContent = 'Promise was rejected!';

  body.appendChild(message);
};

promise1.then(handleSuccess).catch(handleError);

promise2.then(handleSuccess).catch(handleError);
