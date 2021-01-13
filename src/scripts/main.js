'use strict';

const btnResolve = document.querySelector('.logo');

btnResolve.addEventListener('click', () => {
  const promiseResolve = Promise.resolve('Promise was resolved!');

  promiseResolve
    .then(result => {
      // eslint-disable-next-line no-console
      console.log('Successful', result);
    });

  setTimeout(() => {
    const promiseReject = Promise.reject(new Error('Promise was rejected!'));

    promiseReject
      .catch(error => {
      // eslint-disable-next-line no-console
        console.warn(error);
      });
  }, 3000);
});
