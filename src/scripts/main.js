'use strict';

const body = document.querySelector('body');
const promiseSuccess = createPromise();
// eslint-disable-next-line prefer-promise-reject-errors
const promiseReject = Promise.reject(`Promise was rejected!`);

promiseSuccess
  .then(success => {
    const divSuccess = `
    <div class="message">
      ${success}
    </div>`;

    body.insertAdjacentHTML('afterbegin', divSuccess);
  });

promiseReject
  .catch((message) => {
    setTimeout(() => {
      const divError = `
      <div class="error-message">
        ${message}
      </div>`;

      body.insertAdjacentHTML('afterbegin', divError);
    }, 3000);
  });

function createPromise() {
  const resolver = (resolve) => {
    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
      resolve(`Promise was resolved!`);
    });
  };

  return new Promise(resolver);
}
