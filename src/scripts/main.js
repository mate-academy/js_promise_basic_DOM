'use strict';

const promise = new Promise((resolve, reject) => {
  document.addEventListener('click', () => {
    resolve('Success');
  });

  setTimeout(() => {
    reject(new Error('Ooops!'));
  }, 5000);
});

promise
  .then((result) => {
    /* eslint-disable no-console */
    console.log(result);
  })
  .catch((error) => {
    /* eslint-disable no-console */
    console.log(error);
  });
