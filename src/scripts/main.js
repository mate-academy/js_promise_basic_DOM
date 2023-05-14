'use strict';

const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const message = document.createElement('div');
const errorMessage = document.createElement('div');

message.classList = 'message';
message.innerText = 'Promise was resolved!';

errorMessage.classList = 'message error-message';
errorMessage.innerText = 'Promise was rejected!';

function createResolvePromise() {
  const resolver = (resolve, reject) => {
    logo.addEventListener('click', () => {
      resolve();
    });

    setTimeout(() => {
      reject();
    }, 3000);
  };

  return new Promise(resolver);
}

function createRejectPromise() {
  const resolver = (resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 3000);
  };

  return new Promise(resolver);
}

const promise1 = createResolvePromise();

promise1.then(() => {
  body.append(message);

  const promise2 = createRejectPromise();

  return promise2;
})
  .catch(() => {
    body.append(errorMessage);
  });
