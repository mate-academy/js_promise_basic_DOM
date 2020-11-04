'use strict';

const promise1 = new Promise(resolve => {
  document.addEventListener('click', () => {
    resolve('First promise resolved');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Second promise resolved')), 5000);
});

promise1
  .then(result => {
    // eslint-disable-next-line no-console
    console.log(result);
  });

promise2
  .then(result => {
    // eslint-disable-next-line no-console
    console.log(result);
  });
