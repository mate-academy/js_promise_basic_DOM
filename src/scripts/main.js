'use strict';

function createPromise() {
  const resolver = () => {
    document.addEventListener('click', () => {
      // eslint-disable-next-line no-console
      console.log('Success');
    });
  };

  return new Promise(resolver);
}

function fail() {
  document.addEventListener('click', () => {
    // eslint-disable-next-line no-console
    setTimeout(() => console.warn('Error'), 3000);
  });
}

createPromise().then(fail());
