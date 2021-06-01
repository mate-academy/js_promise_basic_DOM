'use strict';

const promise1 = new Promise((resolve) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve('clicked logo, promise1 - success');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('3 seconds is up, promise2 - fail');
  }, 3000);
});

promise1
  // eslint-disable-next-line no-console
  .then(result => console.log('Successful:', result));

promise2
  // eslint-disable-next-line no-console
  .catch(result => console.warn('Unsuccessful:', result));
