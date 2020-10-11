'use strict';

function createPromise() {
  const resolver = (resolve) => {
    document.addEventListener('click', () => {
      resolve('Success');
    });
  };

  return new Promise(resolver);
}

function fail() {
  const resolver = (resolve, reject) => {
    setTimeout(() => reject('Error'), 3000);
  };

  return new Promise(resolver);
}

createPromise().then(result => {
  // eslint-disable-next-line no-console
  console.log(result);
});

fail().catch(error => {
  // eslint-disable-next-line no-console
  console.warn(error);
});
