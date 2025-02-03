'use strict';

const promis1 = new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', (e) => {
    resolve('Promise 1 was resolved!');
  });
});

const promis2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject(`Promise 1 was rejected!`);
  }, 3000);
});

promis1
  .then((message) => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = message;
    document.body.appendChild(div);
  })
  .catch((error) => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = error;
    document.body.appendChild(div);
  });

promis2
  .then((message) => {
    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = message;
    document.body.appendChild(div);
  })
  .catch((error) => {
    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = error;
    document.body.appendChild(div);
  });
