'use strict';

function createPromise() {
  const body = document.querySelector('body');

  const resolver = (resolve, reject) => {
    body.addEventListener('click', () => {
      resolve('Success');
    });

    setTimeout(() => {
      reject('Error');
    }, 5000);
  };

  return new Promise(resolver);
}

const promise1 = createPromise();

promise1
  .then(result => {
    // eslint-disable-next-line no-console
    console.log(result);
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.error(error);
  });
