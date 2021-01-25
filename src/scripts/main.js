/* eslint-disable no-console */
'use strict';

const firstPromise = new Promise((resolve, reject) => {
  document.addEventListener('click', () => {
    resolve('Resolve');
  });
});

firstPromise.then((result) => {
  console.log(result);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Reject'));
  }, 5000);
});

secondPromise.catch((error) => {
  console.log(error);
});
