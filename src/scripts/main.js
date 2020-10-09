'use strict';

function resolvePromise() {
  const body = document.querySelector('body');

  const resolver = resolve => {
    body.addEventListener('click', () => {
      resolve('Success');
    });
  };

  return new Promise(resolver);
}

const promise1 = resolvePromise();

promise1
  .then(result => {
    // eslint-disable-next-line no-console
    console.log(result);
  });

function rejectPromise() {
  const resolver = (resolve, reject) => {
    setTimeout(() => {
      reject('Error');
    }, 5000);
  };

  return new Promise(resolver);
}

const promise2 = rejectPromise();

promise2
  .catch(error => {
    // eslint-disable-next-line no-console
    console.error(error);
  });
