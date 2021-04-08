'use strict';

function createResolvePromise() {
  const resolver = (resolve, reject) => {
    document.querySelector('.logo').addEventListener('click', () => {
      document.querySelector('body').insertAdjacentHTML('beforebegin',
        `<div class="message">
          Promise was resolved!
        </div>`);
      resolve();
    });
  };

  return new Promise(resolver);
};

function createRejectPromise() {
  return new Promise((resolve, reject) => {
    reject(setTimeout(() => {
      document.querySelector('body').insertAdjacentHTML('beforebegin',
        `<div class="error-message">
          Promise was rejected!
        </div>`);
    }, 3000));
  });
};
createRejectPromise();
createResolvePromise();
