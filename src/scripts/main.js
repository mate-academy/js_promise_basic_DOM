'use strict';

const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1
  .then(() => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';

    document.body.appendChild(message);
  })
  .catch(() => {
    const messageError = document.createElement('div');

    messageError.classList.add('message', 'error-message');
    messageError.textContent = 'Promise was rejected!';

    document.body.appendChild(messageError);
  });

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise was rejected!');
  }, 3000);
});

promise2
  .then(() => {
    const message = document.createElement('div');

    message.classList.add('message');
    message.textContent = 'Promise was resolved!';

    document.body.appendChild(message);
  })
  .catch(() => {
    const messageEror = document.createElement('div');

    messageEror.classList.add('message', 'error-message');
    messageEror.textContent = 'Promise was rejected!';

    document.body.appendChild(messageEror);
  });
