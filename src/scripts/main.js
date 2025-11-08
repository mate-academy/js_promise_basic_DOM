'use strict';

const promise1 = new Promise((resolve, reject) => {
  const setLogo = document.querySelector('.logo');

  setLogo.addEventListener('click', () => {
    resolve('Promise was resolved!');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Promise 2 reject after 3 seconds!');
  }, 3000);
});

promise1
  .then((message) => {
    // eslint-disable-next-line no-console
    console.log(message);

    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error);

    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  });

promise2
  .then((message) => {
    // eslint-disable-next-line no-console
    console.error(message);

    const div = document.createElement('div');

    div.className = 'message';
    div.textContent = 'Promise was resolved!';
    document.body.appendChild(div);
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error);

    const div = document.createElement('div');

    div.className = 'message error-message';
    div.textContent = 'Promise was rejected!';
    document.body.appendChild(div);
  });
