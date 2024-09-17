'use strict';

const body = document.querySelector('body');

const promise1 = new Promise((resolve, reject) => {
  body.addEventListener('click', () => {
    resolve('Done');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Time is out'));
  }, 5000);
});

promise1
  .then(result => {
    // eslint-disable-next-line no-console
    console.log(result);
  });

promise2
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
