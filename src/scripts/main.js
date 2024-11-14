'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

logo.addEventListener(
  'click',
  () => {
    const promise1 = new Promise((resolve, reject) => {
      resolve();
    });

    promise1.then(() => {
      const resolveDiv = document.createElement('div');

      resolveDiv.classList.add('message');
      resolveDiv.textContent = 'Promise was resolved!';
      body.append(resolveDiv);
    });
  },
  { once: true },
);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject();
  }, 3000);
});

promise2.catch(() => {
  const rejectDiv = document.createElement('div');

  rejectDiv.classList.add('message', 'error-message');
  rejectDiv.textContent = 'Promise was rejected!';
  body.append(rejectDiv);
});
