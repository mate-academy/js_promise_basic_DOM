'use strict';
/* eslint-disable no-console */

const promise1 = new Promise((resolve) => {
  document.addEventListener('click', () => {
    resolve('Success -- first promise');
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Fail -- second promise'));
  }, 5000);
});

promise1.then((result) => {
  console.log(result);
});

promise2.catch((error) => {
  console.log(error);
});
